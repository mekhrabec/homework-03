import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

import React from 'react'

const Header = (props) => {

    return (
        <View style={styles.header}>
            
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height:150,
        backgroundColor:'green',
        },
    profile:{
        flexDirection:'row',
        alignItems:'center',
    },
    profilePicture:{
        backgroundColor:'red',
        height:70,
        width:70,
        borderRadius:100
    },
    profileName:{
        marginLeft:10,
    },
    fullName:{
        fontSize:20,
        fontWeight:'bold',
    },

})


export default Header