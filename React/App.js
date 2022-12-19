import { Button, Text, View } from 'react-native';

export default function App() {

  return (<View style={{flex:1, padding: 20, justifyContent:'space-between'}}>

          <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>

              <Text style={{color:'gray', fontSize:15}}>Friday 15 Dec</Text>
              <Text style={{color:'gray', fontSize:15}}>Search</Text>

              
          </View>
          <View style={{flex:1, paddingHorizontal:10, paddingVertical:30}}>
            <Text style={{
              color:'black', 
              fontSize:30, 
              fontWeight:'bold', 
              marginBottom:5}}>Learn</Text>
            <Text style={{
              color:'black', 
              fontSize:20}}>Lorem ipsum nese nesefnj</Text>
          </View>
          <View styleSection={{flex:3, 
              backgroundColor:'#ed7663', 
              marginTop:20, 
              borderRadius:20, 
              justifyContent:'center', 
              paddingHorizontal:20}}>
            <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:5}}>Learn</Text>
            <Text style={{color:'white', fontSize:15}}>Lorem ipsum nese nesefnj</Text>
          </View>

          <View style={{flex:3, backgroundColor:'#ec7663',marginTop:20, borderRadius:20, justifyContent:'center', paddingHorizontal:20}}>
            <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:5}}>Learn</Text>
            <Text style={{color:'white', fontSize:15}}>Lorem ipsum nese nesefnj</Text>
          </View>
          <View style={{flex:3, backgroundColor:'#8dc3ba',marginTop:20, borderRadius:20, justifyContent:'center', paddingHorizontal:20}}>
            <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:5}}>Learn</Text>
            <Text style={{color:'white', fontSize:15}}>Lorem ipsum nese nesefnj</Text>
          </View>
          <View style={{flex:3, backgroundColor:'#f2982d',marginTop:20, borderRadius:20, justifyContent:'center', paddingHorizontal:20}}>
            <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:5}}>Learn</Text>
            <Text style={{color:'white', fontSize:15}}>Lorem ipsum nese nesefnj</Text>
          </View>
          <View style={{flex:3, backgroundColor:'#327289',marginTop:20, borderRadius:20, justifyContent:'center', paddingHorizontal:20}}>
            <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:5}}>Learn</Text>
            <Text style={{color:'white', fontSize:15}}>Lorem ipsum nese nesefnj</Text>
          </View>


  </View>);

}

let styleSection

//View - div
// text - p, span

//margin, padding, flex**, 
