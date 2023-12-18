import { EventEmitter, NativeModulesProxy, Subscription } from 'expo-modules-core';

import { ChangeEventPayload, UmpExpoViewProps } from './UmpExpo.types';
import UmpExpoModule from './UmpExpoModule';
import UmpExpoView from './UmpExpoView';

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

export { ChangeEventPayload, UmpExpoView, UmpExpoViewProps };
