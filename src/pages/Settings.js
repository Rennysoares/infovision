import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const images = [{
    props: {
      source: require('../../assets/react-original.png'),
    },
  },]
  return (
    <SafeAreaView>
      <Text>Settings</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});