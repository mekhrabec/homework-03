import React from "react";
import { ActivityIndicator, Image , StyleSheet, FlatList, Text, View } from "react-native";
import Header from './components/header';
import Content from './components/content';



export default function App() {
  const data = [
    {
      name: "Slack",
      date: "moments ago",
      size: "101MB",
      img: "https://miro.medium.com/max/1084/1*L8UwJymGdpTh-jSXhDZO6g.png"
    },
    {
      name: "Du Battery Saver",
      date: "moments ago",
      size: "37MB",
      img: "https://www.androidapksbox.com/wp-content/uploads/2017/10/du-battery-saver.jpg"
    },
    {
      name: "Google",
      date: "11 minutes ago",
      size: "300MB",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/1024px-YouTube_social_red_square_%282017%29.svg.png",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
      img: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flipboard_logo.svg/1200px-Flipboard_logo.svg.png",
    },{
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/1024px-YouTube_social_red_square_%282017%29.svg.png",
    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
      img: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flipboard_logo.svg/1200px-Flipboard_logo.svg.png",
    },
    {
      name: "Youtube",
      date: "42 minutes ago",
      size: "382MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/1024px-YouTube_social_red_square_%282017%29.svg.png",

    },
    {
      name: "Facebook",
      date: "4 hr. ago",
      size: "446MB",
      img: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    },
    {
      name: "Flipboard",
      date: "15 hr. ago",
      size: "446MB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flipboard_logo.svg/1200px-Flipboard_logo.svg.png",
    },
  ];
  return (<>
  <Header></Header>
  <FlatList
   ListHeaderComponent={
     <View style={styles.contentHeader}>
      <Text style={{fontSize:18, fontWeight:'00'}}>On this device</Text>
      <Text>Last Used</Text>
    </View>
   }

   ListHeaderComponentStyle={styles.contentHeader}
    data={data}
    renderItem={Content}/>
    
  </>
 
);
}
const styles = StyleSheet.create({
  container: {
    flex: 31,
    justifyContent: "center"
  },
  contentHeader:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:10,
    height:40,
    borderBottomWidth:0.5,
    borderBottomColor:'#A5A5A5',

},
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

