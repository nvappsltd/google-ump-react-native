import { ConsentDebugSettings } from './ConsentDebugSettings';

export interface ConsentRequestParameters {
  /**
   * Sets the ConsentDebugSettings.
   *
   * If null, no debug setting will be used
   */
  debugSettings?: ConsentDebugSettings;

  /**
   * Sets whether the user is tagged for under age of consent.
   *
   * Default value is false.
   */
  tagForUnderAgeOfConsent?: boolean;
}
