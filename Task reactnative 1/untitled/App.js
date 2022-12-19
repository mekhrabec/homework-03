import { StyleSheet, Image, Text, View } from 'react-native';

import Header from './templateSample/header';
import Profil from './templateSample/profil';
import Section1 from './templateSample/section1';
import Section2Box from './templateSample/section2';
import Section3Box from './templateSample/section3';




export default function App() {
  return (
    <View style={styles.container}>

        <Header></Header>

        <Profil></Profil>

        <Section1></Section1>

      <View style={styles.Section2}>
        <Section2Box></Section2Box>
        <Section2Box></Section2Box>
        <Section2Box></Section2Box>
      </View>

      <View style={styles.Title}>
          <Text style={styles.TitleRecent}>Recent Ffiles</Text>
          <Text style={styles.TitleView}>View all</Text>
      </View>

      <View style={styles.Section3}>
        <Section3Box></Section3Box>
        <Section3Box></Section3Box>
      </View>

      
        

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:20,
    backgroundColor: '#F8F8F8',
    },

    Section2: {
      flex: 3,
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'space-between',
      marginTop:25,
    },

  Title:{
        flex: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
  },
    TitleRecent:{
      color: 'black',
      fontSize:25,
      fontWeight:400,
    },
    TitleView:{
      color: 'gray',
      fontSize:15,
      fontWeight:500,
    },

   Section3:{
    flex: 5,
    alignContent:'center',
    justifyContent:'space-evenly',
  },


});





//View - div
// text - p, span

//margin, padding, flex**,



