import { StyleSheet, Text, View } from 'react-native';

import * as UmpExpo from '@nvappsltd/ump-expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{UmpExpo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
