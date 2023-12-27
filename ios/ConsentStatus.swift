import ExpoModulesCore
import UserMessagingPlatform

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Enums/UMPConsentStatus

enum ConsentStatus: String, Enumerable {
    /**
     * Unknown consent status
     */
    case unknown = "UNKNOWN"

    /**
     * User consent required but not yet obtained
     */
    case required = "REQUIRED"

    /**
     * Consent not required.
     */
    case notRequired = "NOT_REQUIRED"

    /**
     * Undocumented.
     */
    case obtained = "OBTAINED"

    static func fromUMPConsentStatus(consentStatus: UMPConsentStatus) -> ConsentStatus {
        switch consentStatus {
        case .required:
            return .required
        case .notRequired:
            return .notRequired
        case .obtained:
            return .obtained
        case .unknown:
            return .unknown
        default:
            return .unknown
        }
    }
}
