import { DebugGeography } from './DebugGeography';

export interface ConsentDebugSettings {
  /**
   * Sets the debug geography for testing purposes
   */
  debugGeography?: DebugGeography;

  /**
   * Registers a device as a test device. Test devices respect debug geography settings to enable
   * easier testing. Test devices must be added individually so that debug geography settings won't
   * accidentally get released to all users.
   */
  testDeviceIdentifiers?: string[];
}
