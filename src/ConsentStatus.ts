export enum ConsentStatus {
  /**
   * Consent status is unknown. Ump.requestInfoUpdate needs to be called to update the ConsentStatus
   */
  UNKNOWN = 'UNKNOWN',

  /**
   * User consent not required.
   */
  NOT_REQUIRED = 'NOT_REQUIRED',

  /**
   * User consent obtained. Personalized vs non-personalized undefined.
   */
  OBTAINED = 'OBTAINED',

  /**
   * User consent required but not yet obtained.
   */
  REQUIRED = 'REQUIRED',
}
