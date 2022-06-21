import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import logo from '../assets/images/guanrushi.png';

export default function TabTwoScreen() {
  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 336, height: 175 }} />
      <Text></Text>
      <Text style={styles.title}>觀如是 GuanRuShi</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>觀如是</Text>
      <Text></Text>
      <Text>觀</Text>
      <Text>眼為見，心為觀，由心來洞見一切世間的本質與實相。唯有如此，才能夠建構「中道」的智慧，超越相對的思維，進而能夠以客觀的態度來觀察世間的變化。用心觀天下，清澈世間一切變化，而得以安住自心，安止煩躁之心。</Text>
      <Text></Text>
      <Text></Text>
      <Text>如是</Text>
      <Text>如其本然觀察世間一切事物的因果關係，了解其有不變的定律與真理。如者不動，如是的去深思熟慮，我們對世間的一切，能夠更清澈明了。</Text>
      <Text></Text>
      <Text></Text>
      <Text>© {getYear()} 法華慈雲 Fa Hua Ci Yun Buddhist Association Malaysia</Text>
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
