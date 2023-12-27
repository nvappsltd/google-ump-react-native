import ExpoModulesCore

// Source: https://developers.google.com/admob/ios/privacy/api/reference/Classes/UMPDebugSettings

struct DebugSettings: Record {
    /**
     * Sets the debug geography for testing purposes
     */
    @Field
    var debugGeography: DebugGeography?

    /**
     * Array of device identifier strings. Debug features are enabled for devices with these identifiers.
     * Debug features are always enabled for simulators.
     */
    @Field
    var testDeviceIdentifiers: [String]?
}
