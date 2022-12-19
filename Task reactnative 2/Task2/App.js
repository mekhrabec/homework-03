import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './templateSample/header';
import Content from './templateSample/content';
import Footer from './templateSample/footer';


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
