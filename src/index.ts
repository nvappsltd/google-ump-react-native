import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to UmpExpo.web.ts
// and on native platforms to UmpExpo.ts
import UmpExpoModule from './UmpExpoModule';
import UmpExpoView from './UmpExpoView';
import { ChangeEventPayload, UmpExpoViewProps } from './UmpExpo.types';

// Get the native constant value.
export const PI = UmpExpoModule.PI;

export function hello(): string {
  return UmpExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await UmpExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(UmpExpoModule ?? NativeModulesProxy.UmpExpo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { UmpExpoView, UmpExpoViewProps, ChangeEventPayload };
