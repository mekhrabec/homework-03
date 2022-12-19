import { StyleSheet, View, Text } from 'react-native'



//props -> object

    const Profil= () => {
        return ( <View style={styles.profil}>
        <Text style={styles.profilText}>Hi Rakib</Text>
        <Text style={styles.profilTitle}>Manage your file</Text>
      </View> 
 
)
}


const styles = StyleSheet.create({
    profil: {
        flex: 1,
        paddingVertical:20,
        justifyContent:'space-between',
      },
      profilText: {
        Color: '#77758D',
        fontSize:22,
        fontWeight:500,
       },
       profilTitle: {
        Color: '#39426B',
        fontSize:34,
        fontWeight:600,
       }
})

export default Profil

