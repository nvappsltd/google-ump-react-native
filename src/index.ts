import { requireNativeModule } from 'expo-modules-core';
import { UmpInterface } from './UmpInterface';

const UmpModule = requireNativeModule('Ump');

export const Ump: UmpInterface = {
  getConsentInformation() {
    return UmpModule.getConsentInformation();
  },
  requestInfoUpdate(options = {}) {
    return UmpModule.requestInfoUpdate(options);
  },
  loadAndShowConsentFormIfRequired() {
    return UmpModule.loadAndShowConsentFormIfRequired();
  },
  showPrivacyOptionsForm() {
    return UmpModule.showPrivacyOptionsForm();
  },
  reset() {
    UmpModule.reset();
  },
};

export { ConsentDebugSettings } from './ConsentDebugSettings';
export { ConsentInformation } from './ConsentInformation';
export { ConsentRequestParameters } from './ConsentRequestParameters';
export { ConsentStatus } from './ConsentStatus';
export { DebugGeography } from './DebugGeography';
export { PrivacyOptionsRequirementStatus } from './PrivacyOptionsRequirementStatus';
