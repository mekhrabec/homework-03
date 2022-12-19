import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


//props -> object

    const Section2Box = () => {
        return ( 
        <View style={styles.SectionBox}>
            <View style={styles.SectionBoxImg}></View>
                <View style={styles.SectionBoxText}>
                <Text style={styles.SectionBoxTitle}>Picture</Text>
                <Text style={styles.SectionBoxDiscription}>896 items</Text>
            </View>
        </View>
 
)
}


const styles = StyleSheet.create({
    SectionBox:{
        backgroundColor: 'white',
        borderRadius:15,
        width:'30%',
        padding:15,
        alignItems:'center',
      },
      SectionBoxImg:{
        backgroundColor: '#FC68FE',
        borderRadius:15,
        width:'100%',
        height:'70%',
      },
      SectionBoxText:{
        alignItems:'center',
        paddingVertical:5,
      },
      SectionBoxTitle:{
        fontSize:15,
        fontWeight:'bold',

      },
      SectionBoxDiscription:{
        fontSize:10,
      },
})

export default Section2Box

