package co.nvapps.googleump

import com.google.android.ump.ConsentInformation
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

/**
 * Data class representing user's consent information.
 *
 * @property canRequestAds Indicates whether the app has completed the necessary steps for gathering updated user consent.
 * @property status The consent status of the user. Refer to [UmpConsentStatus] for details.
 * @property privacyOptionsRequirementStatus The requirement status for privacy options. Refer to [UmpPrivacyOptionsRequirementStatus] for details.
 * @property isConsentFormAvailable true if a ConsentForm is available, false otherwise.
 */
data class UmpConsentInformation(
  @Field val canRequestAds: Boolean,
  @Field val status: UmpConsentStatus,
  @Field val privacyOptionsRequirementStatus: UmpPrivacyOptionsRequirementStatus,
  @Field val isConsentFormAvailable: Boolean
) : Record {
  companion object {
    fun fromConsentInformation(consentInformation: ConsentInformation): UmpConsentInformation {
      return UmpConsentInformation(
        canRequestAds = consentInformation.canRequestAds(),
        status = UmpConsentStatus.fromConsentStatus(consentInformation.consentStatus),
        privacyOptionsRequirementStatus = UmpPrivacyOptionsRequirementStatus.fromPrivacyOptionsRequirementStatus(
          consentInformation.privacyOptionsRequirementStatus
        ),
        isConsentFormAvailable = consentInformation.isConsentFormAvailable
      )
    }
  }
}