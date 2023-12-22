import { ConsentInformation } from './ConsentInformation';
import { ConsentRequestParameters } from './ConsentRequestParameters';

export interface UmpInterface {
  /**
   * @returns The current consent information.
   */
  getConsentInformation(): ConsentInformation;

  /**
   * Requests a consent information update.
   *
   * This method should be called before any other Ump methods.
   * It will update and return the consent information.
   *
   * #### Example
   *
   * ```js
   * import { Ump } from 'google-ump-react-native';
   *
   * Ump.requestInfoUpdate().then(() => {
   *   Ump.loadAndShowConsentFormIfRequired().then(({canRequestAds}) => {
   *     if (canRequestAds) {
   *       // initializeMobileAdsSdk();
   *     }
   *   })
   * });
   *
   * // Check if you can initialize the Google Mobile Ads SDK in parallel
   * // while checking for new consent information. Consent obtained in
   * // the previous session can be used to request ads.
   * if (Ump.getConsentInformation().canRequestAds) {
   *   // initializeMobileAdsSdk();
   * }
   * ```
   *
   * #### Example with debug settings
   *
   * ```js
   * * import { DebugGeography, Ump } from 'google-ump-react-native';
   * const TEST_DEVICE_ID = 'D7FCF9667285AE99077DE54805760DFD';
   *
   * Ump.requestInfoUpdate({
   *   debugSettings: {
   *     debugGeography: DebugGeography.EEA,
   *     testDeviceIdentifiers: [TEST_DEVICE_ID],
   *   },
   *   tagForUnderAgeOfConsent: false,
   * }).then(() => {
   *   Ump.loadAndShowConsentFormIfRequired().then(({canRequestAds}) => {
   *     if (canRequestAds) {
   *       // initializeMobileAdsSdk();
   *     }
   *   })
   * });
   *
   * if (Ump.getConsentInformation().canRequestAds) {
   *   // initialize Mobile Ads SDK
   * }
   * ```
   * @param options Optional parameters for the request.
   * @throws an Error when consent info failed to update
   * @returns A promise that resolves to the updated consent information.
   */
  requestInfoUpdate(options?: ConsentRequestParameters): Promise<ConsentInformation>;

  /**
   * Loads a consent form and immediately shows if consent status is {@link ConsentStatus.REQUIRED}.
   *
   * when this method finishes, which may occur due to one of the following:
   * - the user is presented with the form, selects an option, and dismisses the form
   * - the form is not required to show
   * - the form fails to load, returning a non-null E_FORM_ERROR
   * - the form fails to show, returning a non-null E_FORM_ERROR
   *
   * @throws an Error when the form fails to load or fails to show
   * @returns A promise that resolves to the updated consent information.
   */
  loadAndShowConsentFormIfRequired(): Promise<ConsentInformation>;

  /**
   * Presents a privacy options form.
   *
   * This method should only be called in response to a user input to request a privacy options form to be shown.
   *
   * The privacy options form is preloaded by the SDK automatically when a form becomes available. If no form has been preloaded, the SDK will try to load one asynchronously.
   *
   * This may return E_FORM_ERROR under one of the following error conditions:
   * - the form is not available
   * - the form fails to show
   * - the form is still being preloaded
   *
   * @returns A promise that resolves to the updated consent information.
   */
  showPrivacyOptionsForm(): Promise<ConsentInformation>;

  /**
   * Resets the ConsentInformation to initialized status. This should only be used for debugging.
   */
  reset(): void;
}
