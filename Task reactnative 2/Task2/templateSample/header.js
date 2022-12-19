import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

import React from 'react'

const Header = (props) => {

    return (
        <View style={styles.header}>
            <View style={styles.profile}>
                <View style={styles.profilePicture}>

                </View>
                <View style={styles.profileName}>
                    <Text style={styles.fullName}>{props.fullname}</Text>
                    <Text style={styles.userName}>{props.username}</Text>
                </View>

            </View>
            <View>
                <Feather name="menu" size={20} color="black" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        flex: 2 ,
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
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