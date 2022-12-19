import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from 'react'

const Content = () => {
    return (
        <View style={styles.content}>
            <View style={styles.contentBox}>
                <View style={styles.left}>
                <View style={styles.contentAvatar}>
                
                
                </View>

                <View style={styles.profileName}>
                    <Text style={styles.fullName}>Devon Conway</Text>
                    <Text style={styles.userName}>@devonconway</Text>
                </View>
             </View>

                <View style={styles.contentBoxFollowing}>
                    <Text style={{ color:'white', fontWeight:'700'}}>Following</Text>
                </View>
            </View>

            <View style={styles.contentBox}>
                <View style={styles.left}>
                <View style={styles.contentAvatar}>

                </View>

                <View style={styles.profileName}>
                    <Text style={styles.fullName}>Devon Conway</Text>
                    <Text style={styles.userName}>@devonconway</Text>
                </View>
             </View>

                <View style={styles.contentBoxFollow}>
                    <Text style={{ color:'black', fontWeight:'700'}}>Follow </Text>
                    <MaterialIcons name="verified" size={15} color="#4FC4F5" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    content:{
        flex: 8,
        backgroundColor:'lightgreen',
    },
    contentBox:{
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
        height:80,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5

    },
    contentAvatar:{
        backgroundColor:'blue',
        width:50,
        height:50,
        borderRadius:100,
    },
    profileName:{
        paddingLeft:10,
    },
    fullName:{
        fontWeight:'500',
        fontSize:17,
    },
    userName:{
        color:'gray',
    },
    left:{
        alignItems:'center',
        flexDirection:'row',
    },
    contentBoxFollowing:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'#4FC4F5',
        paddingHorizontal:15,
        paddingVertical:8,
        borderRadius:20,
    },
    contentBoxFollow:{
        flexDirection:'row',
        alignItems:'center'
,        backgroundColor:'#DAF4FF',
        paddingHorizontal:15,
        paddingVertical:8,
        borderRadius:20,
    },
})


export default Content