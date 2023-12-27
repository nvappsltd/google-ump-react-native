import ExpoModulesCore
import UserMessagingPlatform

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Enums/UMPPrivacyOptionsRequirementStatus

enum PrivacyOptionsRequirementStatus: String, Enumerable {
    /**
     * Requirement unknown.
     */
    case unknown = "UNKNOWN"

    /**
     * A way must be provided for the user to modify their privacy options.
     */
    case required = "REQUIRED"

    /**
     * User does not need to modify their privacy options. Either consent is not required, or the consent type does not require modification.
     */
    case notRequired = "NOT_REQUIRED"

    static func fromUMPPrivacyOptionsRequirementStatus(status: UMPPrivacyOptionsRequirementStatus) -> PrivacyOptionsRequirementStatus {
        switch status {
        case .required:
            return .required
        case .notRequired:
            return .notRequired
        case .unknown:
            return .unknown
        default:
            return .unknown
        }
    }
}
