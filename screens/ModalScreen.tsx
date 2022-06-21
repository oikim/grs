import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Radio</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text></Text>
      <Text>This is an attempt to create live radio streaming for community.</Text>
      <Text></Text>
      <Text>Swipe down to close this screen.</Text>
      <Text></Text>
      <Text>© {getYear()} 法華慈雲 Fa Hua Ci Yun Buddhist Association Malaysia</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
