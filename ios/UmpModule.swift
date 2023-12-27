import ExpoModulesCore
import UserMessagingPlatform

final class MissingViewControllerException: Exception {
    override var reason: String {
        "Unable to find the current view controller to present the UMP form"
    }
}

public class UmpModule: Module {
    public func definition() -> ModuleDefinition {
        Name("Ump")

        Function("getConsentInformation") {
            return getConsentInformation()
        }

        AsyncFunction("requestInfoUpdate") { (requestParameters: RequestParameters, promise: Promise) in
            let umpRequestParameters = UMPRequestParameters()

            umpRequestParameters.tagForUnderAgeOfConsent = requestParameters.tagForUnderAgeOfConsent

            if let debugSettings = requestParameters.debugSettings {
                let umpDebugSettings = UMPDebugSettings()

                if debugSettings.testDeviceIdentifiers != nil {
                    umpDebugSettings.testDeviceIdentifiers = debugSettings.testDeviceIdentifiers
                }

                if let debugGeography = debugSettings.debugGeography {
                    umpDebugSettings.geography = debugGeography.toUMPDebugGeography()
                }

                umpRequestParameters.debugSettings = umpDebugSettings
            }

            UMPConsentInformation.sharedInstance.requestConsentInfoUpdate(
                with: umpRequestParameters,
                completionHandler: { error in self.handleResult(error: error, promise: promise) })
        }

        AsyncFunction("loadAndShowConsentFormIfRequired", { (promise: Promise) in
            guard let currentVc = appContext?.utilities?.currentViewController() else {
                throw MissingViewControllerException()
            }

            UMPConsentForm.loadAndPresentIfRequired(from: currentVc) { error in
                self.handleResult(error: error, promise: promise)
            }
        }).runOnQueue(DispatchQueue.main)

        AsyncFunction("showPrivacyOptionsForm", { (promise: Promise) in
            guard let currentVc = appContext?.utilities?.currentViewController() else {
                throw MissingViewControllerException()
            }

            UMPConsentForm.presentPrivacyOptionsForm(from: currentVc) { error in
                self.handleResult(error: error, promise: promise)
            }
        }).runOnQueue(DispatchQueue.main)

        Function("reset") {
            UMPConsentInformation.sharedInstance.reset()
        }
    }

    private func getConsentInformation() -> ConsentInformation {
        return ConsentInformation.fromUMPConsentInformation(consentInformation: UMPConsentInformation.sharedInstance)
    }

    private func handleResult(error: Error?, promise: Promise) {
        if let error = error {
            promise.reject("E_FORM_ERROR", error.localizedDescription)
        } else {
            promise.resolve(getConsentInformation())
        }
    }
}
