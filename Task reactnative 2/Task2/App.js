import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './templateSample/header';
import Content from './templateSample/content';
import Footer from './templateSample/footer';
import SectionListSample from './templateSample/Samole';



export default function App() {


  let boxes = [
    {
      Ordered: 'Head and Face',
      Shipname: '11 diseases',
      shipvia: '#8DC3BB'
    },
    {
      title: 'Back and Neck',
      description: '9 diseases',
      color: '#EB7562'
    },
    {
      title: 'Elbow and Shoulders',
      description: '12 diseases',
      color: '#F1982E'
    },
    {
      title: 'Hand and Arm',
      description: '2 diseases',
      color: '#317389'
    }
  ]

  //string, number, object, array, FUNCTION!!

  const orderFinish = () => {
    alert('Finish Order');
  }

  const showText = (text) => {
    alert(text);
  }

  return (<>
    {/* <FlatListSample /> */}
    <SectionListSample/>

  </>);

}


const styles = StyleSheet.create({

  title: {
    flex: 2
  }
})
