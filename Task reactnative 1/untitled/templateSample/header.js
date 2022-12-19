import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


//props -> object

    const Header = () => {
        return ( <View style={styles.header}>
    <FontAwesome name="navicon" size={25} color="#77788A" />
    <FontAwesome5 name="bell" size={25} color="#77788A" />
  </View>
 
)
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }
})

export default Header

