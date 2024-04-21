
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import logo from "../assets/images/logo.png"
import cards from "../assets/images/cards.png"
import path from "../assets/images/path.png"


const demo = () => {
  return (
    <SafeAreaView style={{backgroundColor: "blue", flex: 1, justifyContent: "center", alignItems:"center"}}>
    <View style={{ flex: 1, justifyContent: "center", alignItems:"center"}} >
      <View className ={styles.headerLogo} style={{justifyContent: "center", alignItems:"center", flexDirection: "row", gap: "1rem"}}>
        <Image source={logo} alt='Aora' style={{ width: "25rem", height: "10rem", resizeMode: true}}/>
        {/* <Text style={{fontSize: "56px"}}>Aora</Text> */}
      </View>

      <View style={{width: "5rem", justifyContent:"center", alignItems: "center"}}>
      <Image source={cards} alt='Aora'  style={{width: "17rem", height: "17rem"}}/>
      </View>

      <View>
        <Text style ={{textAlign: "center", fontSize: "38px", fontWeight: "600", color: "white"}}>Discover Endless Possibilities with
          <Text style={{color: "yellow"}}> Aora 
            <Image source={path} alt='path' 
            style={{position:"absolute", bottom:"-0.1rem", width: "4rem", height: "1rem", left: "50%", right: "50%"}}/>
          </Text>
        </Text>
      </View>



    </View>
    </SafeAreaView>
  )
}

export default demo

const styles = StyleSheet.create({
    splashPage:{
       backgroundColor: "black"
    },

    headerLogo:{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        // backgroundColor: "black"
    }
})
