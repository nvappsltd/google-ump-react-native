package co.nvapps.googleump

import com.google.android.ump.ConsentDebugSettings.DebugGeography
import expo.modules.kotlin.types.Enumerable

enum class UmpDebugGeography(val value: Int) : Enumerable {
  /**
   * Debug geography disabled
   */
  DISABLED(0),

  /**
   * Geography appears as in EEA for debug devices
   */
  EEA(1),

  /**
   * Geography appears as not in EEA for debug devices
   */
  NOT_EEA(2);

  fun toDebugGeography(): Int {
    return when (this) {
      DISABLED -> DebugGeography.DEBUG_GEOGRAPHY_DISABLED
      EEA -> DebugGeography.DEBUG_GEOGRAPHY_EEA
      NOT_EEA -> DebugGeography.DEBUG_GEOGRAPHY_NOT_EEA
    }
  }
}





