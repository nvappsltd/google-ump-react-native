package co.nvapps.googleump

import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

class UmpConsentRequestParameters : Record {
  /**
   * Sets the ConsentDebugSettings.
   *
   * If null, no debug setting will be used
   */
  @Field
  val debugSettings: UmpConsentDebugSettings? = null

  /**
   * Sets whether the user is tagged for under age of consent.
   *
   * Default value is false.
   */
  @Field
  val tagForUnderAgeOfConsent: Boolean = false
}
