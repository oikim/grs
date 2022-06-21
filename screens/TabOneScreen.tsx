import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const getYear = () => {
    return new Date().getFullYear();
  }
  const [sound, setSound] = React.useState();
  function componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            playThroughEarpieceAndroid: false
        });
        this._loadNewPlaybackInstance(true);
  }
  async function playBeep() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/beep-07.mp3'));
      await soundObject.playAsync();
      console.log('GRS -> Beep');
    } catch (error) {
      console.log('GRS -> Beep Error: ' + error);
    }
  }
  async function stopSound() {
    sound.unloadAsync();
  }
  async function playSound() {
    playBeep();
    console.log('GRS -> Loading Sound...');
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://apsb.io/grs/a.mp3' },
      { shouldPlay: true }
    );
    console.log('GRS -> Set Sound...');
    setSound(sound);
    console.log('GRS -> Playing Sound...');
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('GRS -> Unloading Sound.');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>觀如是 Stream</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text></Text>
      <Button title="Play Server MP3" onPress={playSound} />
      <Text></Text>
      <Button title="Stop Server MP3" onPress={stopSound} />
      <Text></Text>
      <Text>© {getYear()} 法華慈雲 Fa Hua Ci Yun Buddhist Association Malaysia</Text>
      <StatusBar style="auto" />
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
