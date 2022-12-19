import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


//props -> object

    const Section1 = () => {
        return ( <View style={styles.Section1}>
          <View style={styles.Section1Img}></View>
          <View style={styles.Section1Text}></View>
      </View>
 
)
}


const styles = StyleSheet.create({
  Section1: {
    flex: 4,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-between',
    backgroundColor: '#7F51F9',
    borderRadius:25,
    marginTop:20,
    shadowColor: '#52006A',  
    elevation: 50,  
    },
})

export default Section1

