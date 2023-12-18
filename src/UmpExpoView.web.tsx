import * as React from 'react';

import { UmpExpoViewProps } from './UmpExpo.types';

export default function UmpExpoView(props: UmpExpoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
