import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import DrawerView from 'react-native-test';

export default function App() {
  console.log('ffjfjfj', DrawerView);

  return (
    <View style={styles.container}>
      <DrawerView />
      <View>
        <Text>fff</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
