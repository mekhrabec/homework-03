import { View, Image, TouchableOpacity, StyleSheet, handleClick, Text, Alert } from 'react-native'

import React from 'react'

// const data = [
//     {
//       name: "Slack",
//       date: "moments ago",
//       size: "101MB",
//     },
//     {
//       name: "Du Battery Saver",
//       date: "moments ago",
//       size: "37MB",
//     },
//     {
//       name: "Google",
//       date: "11 minutes ago",
//       size: "300MB",
//     },
//     {
//       name: "Youtube",
//       date: "42 minutes ago",
//       size: "382MB",
//     },
//     {
//       name: "Facebook",
//       date: "4 hr. ago",
//       size: "446MB",
//     },
//     {
//       name: "Flipboard",
//       date: "15 hr. ago",
//       size: "446MB"
//     },
//   ];
const Content = ({item}) => {


    const onPress = ()=>{
        Alert.alert(
            //Title
           'AppStore',
            //Body
           'Confrim with install button',
           [{
               text: 'Install',
               onPress: () => {
                    console.log('instalinggg')
               }
               
           }]
        )
        
    }


return (
        <View style={styles.content}>
            {/* <View style={styles.contentHeader}>
                <Text style={{fontSize:18, fontWeight:'00'}}>On this device</Text>
                <Text>Last Used</Text>
            </View> */}

            <View style={styles.deviceList}>
            <View style={styles.box}>
                    <View style={styles.left}>
                        <View style={styles.deviceAvatar}>
                        <Image style={{width:50, height:50, borderRadius:100}}
                        source={{
                        uri: item.img,
                        }}
                        />
                        </View>

                        <View style={styles.profileName}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.disciription}>{item.size}</Text>
                        </View>
                    </View>

                    <View style={styles.boxButton}>
                        {/* <Text style={{ color:'green', fontWeight:'700'}}>OPEN</Text> */}
                        <TouchableOpacity
                            style={styles.button} onPress={onPress}>
                            <Text>Install</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>


        </View>

    
)}


const styles = StyleSheet.create({
        content:{
        flex: 8 ,
    },
        contentHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:20,
        borderBottomWidth:0.5,
        borderBottomColor:'#A5A5A5',

    },
    deviceList:{
        flex:1,
        backgroundColor:'green',
    },
    box:{
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        height:80,
        backgroundColor:'white',
        elevation: 5,
        borderBottomWidth:0.5,
        borderBottomColor:'#D3D3D3',
        paddingHorizontal:20,

     },
    deviceAvatar:{
        width:50,
        height:50,
    },
    profileName:{
        paddingLeft:10,
    },
    title:{
        fontWeight:'500',
        fontSize:17,
    },
    disciription:{
        color:'gray',
    },
    left:{
        alignItems:'center',
        flexDirection:'row',
    },
    boxButton:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderColor:'green',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        color:'green',
    },   


})


export default Content