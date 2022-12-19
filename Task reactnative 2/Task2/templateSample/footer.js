import { Button } from "@react-native-material/core";
import { View , StyleSheet } from 'react-native'
import React from 'react'




const Footer = () => {
    return (
        <View style={styles.footer}>
            <Button title="Let's go" uppercase={false} style={{ alignSelf: "center", backgroundColor:'#4FC4F5', paddingHorizontal:30,paddingVertical:8, size:30, borderRadius:30}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    footer:{
        flex: 2,
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        
    },
   
   
    
})


export default Footer