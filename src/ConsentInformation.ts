import { ConsentStatus } from './ConsentStatus';
import { PrivacyOptionsRequirementStatus } from './PrivacyOptionsRequirementStatus';

/**
 * Represents user's consent information.
 */
export interface ConsentInformation {
  /**
   * Indicates whether the app has completed the necessary steps for gathering updated user consent.
   */
  canRequestAds: boolean;

  /**
   * The consent status of the user.
   * {@link ConsentStatus}
   */
  status: ConsentStatus;

  /**
   * The requirement status for privacy options.
   * {@link PrivacyOptionsRequirementStatus}
   */
  privacyOptionsRequirementStatus: PrivacyOptionsRequirementStatus;

  /**
   * `true` if a ConsentForm is available, `false` otherwise
   */
  isConsentFormAvailable: boolean;
}
