package co.nvapps.googleump

import com.google.android.ump.ConsentInformation
import expo.modules.kotlin.types.Enumerable

enum class UmpPrivacyOptionsRequirementStatus(val value: String) : Enumerable {
  /**
   * Privacy options entry point is not required.
   */
  NOT_REQUIRED("NOT_REQUIRED"),

  /**
   * Privacy options entry point is required.
   */
  REQUIRED("REQUIRED"),

  /**
   * Privacy options requirement status is unknown.
   */
  UNKNOWN("UNKNOWN");

  companion object {
    fun fromPrivacyOptionsRequirementStatus(status: ConsentInformation.PrivacyOptionsRequirementStatus): UmpPrivacyOptionsRequirementStatus {
      return when (status) {
        ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED -> REQUIRED
        ConsentInformation.PrivacyOptionsRequirementStatus.NOT_REQUIRED -> NOT_REQUIRED
        ConsentInformation.PrivacyOptionsRequirementStatus.UNKNOWN -> UNKNOWN
        else -> UNKNOWN
      }
    }
  }
}