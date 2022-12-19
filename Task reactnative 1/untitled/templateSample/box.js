import { StyleSheet, View, Text } from 'react-native'


//props -> object
export default function Box({ title, description, color }) {

    console.log('color', color);
    //<></>  -> Fragment
    return <View style={styles.header}>
    <FontAwesome name="navicon" size={20} color="#77788A" />
    <FontAwesome5 name="bell" size={20} color="#77788A" />
  </View>
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }
})
