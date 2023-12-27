import ExpoModulesCore
import UserMessagingPlatform

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Classes/UMPConsentInformation

/**
 * Data struct representing user's consent information.
 */
struct ConsentInformation: Record {
    init() {}

    /**
     * Indicates whether the app has completed the necessary steps for gathering updated user consent.
     */
    @Field
    var canRequestAds: Bool = false

    /**
     * The consent status of the user. See `ConsentStatus` for details.
     */
    @Field
    var status: String = ConsentStatus.unknown.rawValue

    /**
     * The requirement status for privacy options. See `PrivacyOptionsRequirementStatus` for details.
     */
    @Field
    var privacyOptionsRequirementStatus: String = PrivacyOptionsRequirementStatus.unknown.rawValue

    /**
     * `true` if a ConsentForm is available, `false` otherwise.
     */
    @Field
    var isConsentFormAvailable: Bool = false

    init(canRequestAds: Bool,
         status: ConsentStatus,
         privacyOptionsRequirementStatus: PrivacyOptionsRequirementStatus,
         isConsentFormAvailable: Bool)
    {
        self.canRequestAds = canRequestAds
        self.status = status.rawValue
        self.privacyOptionsRequirementStatus = privacyOptionsRequirementStatus.rawValue
        self.isConsentFormAvailable = isConsentFormAvailable
    }

    static func fromUMPConsentInformation(consentInformation: UMPConsentInformation) -> ConsentInformation {
        return ConsentInformation(
            canRequestAds: consentInformation.canRequestAds,
            status: ConsentStatus.fromUMPConsentStatus(consentStatus: consentInformation.consentStatus),
            privacyOptionsRequirementStatus: PrivacyOptionsRequirementStatus.fromUMPPrivacyOptionsRequirementStatus(status: consentInformation.privacyOptionsRequirementStatus),
            isConsentFormAvailable: consentInformation.formStatus == UMPFormStatus.available
        )
    }
}
