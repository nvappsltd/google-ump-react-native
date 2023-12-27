import ExpoModulesCore
import UserMessagingPlatform

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Enums/UMPDebugGeography

enum DebugGeography: Int, Enumerable {
  /**
   * Debug geography disabled
   */
  case disabled = 0

  /**
   * Geography appears as in EEA for debug devices
   */
  case EEA = 1

  /**
   * Geography appears as not in EEA for debug devices
   */
  case notEEA = 2

  func toUMPDebugGeography() -> UMPDebugGeography {
    switch self {
    case .disabled:
        return UMPDebugGeography.disabled
    case .EEA:
        return UMPDebugGeography.EEA
    case .notEEA:
        return UMPDebugGeography.notEEA
    }
  }
}
