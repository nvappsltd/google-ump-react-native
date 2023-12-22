package co.nvapps.googleump

import com.google.android.ump.ConsentInformation
import expo.modules.kotlin.types.Enumerable

enum class UmpConsentStatus(val value: String) : Enumerable {
  /**
   * Consent status is unknown. requestInfoUpdate needs to be called to update the ConsentStatus
   */
  UNKNOWN("UNKNOWN"),

  /**
   * User consent not required.
   */
  NOT_REQUIRED("NOT_REQUIRED"),

  /**
   * User consent obtained. Personalized vs non-personalized undefined.
   */
  OBTAINED("OBTAINED"),

  /**
   * User consent required but not yet obtained.
   */
  REQUIRED("REQUIRED");

  companion object {
    fun fromConsentStatus(consentStatus: Int): UmpConsentStatus {
      return when (consentStatus) {
        ConsentInformation.ConsentStatus.REQUIRED -> REQUIRED
        ConsentInformation.ConsentStatus.NOT_REQUIRED -> NOT_REQUIRED
        ConsentInformation.ConsentStatus.OBTAINED -> OBTAINED
        ConsentInformation.ConsentStatus.UNKNOWN -> UNKNOWN
        else -> UNKNOWN
      }
    }
  }
}
