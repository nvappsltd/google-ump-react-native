import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ConsentInformation, DebugGeography, Ump } from 'google-ump-react-native';
import { useState } from 'react';

const TEST_DEVICE_ID = 'D7FCF9667285AE99077DE54805760DFD';
const DEBUG_GEOGRAPHY: DebugGeography | undefined = DebugGeography.EEA;

export default function App() {
  const [consentInformation, setConsentInformation] = useState<ConsentInformation>(
    Ump.getConsentInformation(),
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Consent Info:</Text>
            <Text>{JSON.stringify(consentInformation, null, 2)}</Text>
          </View>

          <Button
            title="Request Info Update"
            onPress={() => {
              Ump.requestInfoUpdate({
                debugSettings: {
                  debugGeography: DEBUG_GEOGRAPHY,
                  testDeviceIdentifiers: [TEST_DEVICE_ID],
                },
                tagForUnderAgeOfConsent: false,
              })
                .then((ci) => setConsentInformation(ci))
                .catch((e) => Alert.alert('Error', e.message));
              setConsentInformation(Ump.getConsentInformation());
            }}
          />

          <Button
            title="Load & Show Consent Form If Required"
            onPress={() =>
              Ump.loadAndShowConsentFormIfRequired()
                .then((ci) => setConsentInformation(ci))
                .catch((e) => Alert.alert('Error', e.message))
            }
          />

          <Button
            title="Show Privacy Options Form"
            onPress={() =>
              Ump.showPrivacyOptionsForm()
                .then((ci) => setConsentInformation(ci))
                .catch((e) => Alert.alert('Error', e.message))
            }
          />

          <Button
            title="Reset Consent"
            color={'red'}
            onPress={() => {
              Ump.reset();
              setConsentInformation(Ump.getConsentInformation());
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    gap: 20,
    justifyContent: 'center',
  },
});
