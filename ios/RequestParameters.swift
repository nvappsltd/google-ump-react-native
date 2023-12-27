import ExpoModulesCore

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Classes/UMPRequestParameters

struct RequestParameters: Record {
    /**
     * Debug settings for the request
     */
    @Field
    var debugSettings: DebugSettings?

    /**
     * Indicates whether the user is tagged for under age of consent. The default value is `false`.
     */
    @Field
    var tagForUnderAgeOfConsent: Bool = false
}
