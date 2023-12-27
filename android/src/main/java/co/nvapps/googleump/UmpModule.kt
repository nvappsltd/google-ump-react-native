package co.nvapps.googleump

import android.content.Context
import com.google.android.ump.ConsentDebugSettings
import com.google.android.ump.ConsentInformation
import com.google.android.ump.ConsentRequestParameters
import com.google.android.ump.UserMessagingPlatform
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class UmpModule : Module() {

  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()

  private val currentActivity
    get() = appContext.activityProvider?.currentActivity ?: throw Exceptions.MissingActivity()

  private lateinit var consentInformation: ConsentInformation

  override fun definition() = ModuleDefinition {
    Name("Ump")

    OnCreate {
      consentInformation = UserMessagingPlatform.getConsentInformation(context)
    }

    Function("getConsentInformation") {
      return@Function UmpConsentInformation.fromConsentInformation(consentInformation)
    }

    AsyncFunction("requestInfoUpdate") { options: UmpConsentRequestParameters, promise: Promise ->
      try {
        val consentRequestParameters = ConsentRequestParameters.Builder().apply {
          setTagForUnderAgeOfConsent(options.tagForUnderAgeOfConsent)
          options.debugSettings?.let {
            val debugSettingsBuilder = ConsentDebugSettings.Builder(context).apply {
              it.testDeviceIdentifiers?.forEach { id ->
                addTestDeviceHashedId(id)
              }
              it.debugGeography?.let {
                setDebugGeography(it.toDebugGeography())
              }
            }
            setConsentDebugSettings(debugSettingsBuilder.build())
          }
        }.build()

        consentInformation.requestConsentInfoUpdate(
          currentActivity,
          consentRequestParameters,
          { promise.resolve(UmpConsentInformation.fromConsentInformation(consentInformation)) },
          { formError ->
            promise.reject("E_FORM_ERROR", formError.message, null)
          })
      } catch (e: Exception) {
        promise.reject("E_UNKNOWN_ERROR", e.message, e)
      }
    }

    AsyncFunction("loadAndShowConsentFormIfRequired") { promise: Promise ->
      try {
        currentActivity.runOnUiThread {
          UserMessagingPlatform.loadAndShowConsentFormIfRequired(currentActivity) { loadAndShowError ->
            if (loadAndShowError != null) {
              promise.reject(
                "E_LOAD_AND_SHOW_ERROR",
                "Error Code: ${loadAndShowError.errorCode}, Message: ${loadAndShowError.message}",
                null
              )
            } else {
              promise.resolve(UmpConsentInformation.fromConsentInformation(consentInformation))
            }
          }
        }
      } catch (e: Exception) {
        promise.reject("E_UNKNOWN_ERROR", e.message ?: "Unknown Error", e)
      }
    }

    AsyncFunction("showPrivacyOptionsForm") { promise: Promise ->
      try {
        currentActivity.runOnUiThread {
          UserMessagingPlatform.showPrivacyOptionsForm(currentActivity) { formError ->
            if (formError != null) {
              promise.reject(
                "E_FORM_ERROR",
                "Error Code: ${formError.errorCode}, Message: ${formError.message}",
                null
              )
            } else {
              promise.resolve(UmpConsentInformation.fromConsentInformation(consentInformation))
            }
          }
        }
      } catch (e: Exception) {
        promise.reject("E_UNKNOWN_ERROR", e.message ?: "Unknown Error", e)
      }
    }

    Function("reset") {
      consentInformation.reset()
    }
  }
}
