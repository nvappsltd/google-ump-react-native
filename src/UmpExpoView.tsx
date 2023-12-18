import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { UmpExpoViewProps } from './UmpExpo.types';

const NativeView: React.ComponentType<UmpExpoViewProps> =
  requireNativeViewManager('UmpExpo');

export default function UmpExpoView(props: UmpExpoViewProps) {
  return <NativeView {...props} />;
}
