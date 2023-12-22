package co.nvapps.googleump

import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

class UmpConsentDebugSettings : Record {
  /**
   * Sets the debug geography for testing purposes
   */
  @Field
  val debugGeography: UmpDebugGeography? = null

  /**
   * Registers a device as a test device. Test devices respect debug geography settings to enable
   * easier testing. Test devices must be added individually so that debug geography settings won't
   * accidentally get released to all users.
   */
  @Field
  val testDeviceIdentifiers: Array<String>? = null
}

