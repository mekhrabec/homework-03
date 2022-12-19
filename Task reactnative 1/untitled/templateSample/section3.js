import { StyleSheet, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


//props -> object

    const Section3Box = () => {
        return ( 
        <View style={styles.Section3Box}>
            <View style={styles.Section3BoxImg}>
                <View style={styles.img}></View>
                <View style={styles.text}>
                    <Text style={styles.textTitle}>Hi Rakib</Text>
                    <Text style={styles.profilTitle}>Manage your file</Text>
                </View>
            </View>
            <View style={styles.Section3BoxMore}>
            <Feather name="more-vertical" size={24} color="black" />            
            </View>
        </View>
 
)
}


const styles = StyleSheet.create({
   
      Section3Box:{
        backgroundColor:'white',
        height:'45%', 
        borderRadius:20,
        padding:10,
        flexDirection:'row'
      
      },

      Section3BoxImg:{
        width:'90%',
        padding:10,  
        flexDirection:'row',
        alignItems:'center',
      },

      img:{
        backgroundColor: '#FFD00E',
        height:'100%',
        width:'20%',
      },

      text:{
        paddingLeft:10,
        fontSize:10,

      },

      textTitle:{
        fontSize:18,
        fontWeight: 'bold',
      },

      Section3BoxMore:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center',
      }
})

export default Section3Box

