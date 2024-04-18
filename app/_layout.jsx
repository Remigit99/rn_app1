
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


// import Img1 from "../assets/favicon.png"

export default function App() {


// const[alert, setAlert] = useState("")

  return (
    <View style={styles.container}>
{/* <Image src = { require("../assets/favicon.png")} /> */}
      <Text style={styles.textHeader}>
        Welcome to React Native App
      </Text>
      <Text fontSize={12}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Doloribus doloremque architecto maxime omnis non delectus rem id magnam 
        voluptates laudantium.
      </Text>


      <TextInput style= {styles.textInput} placeholder='Surname' value=''/>
      <TextInput style= {styles.textInput} placeholder='Lastname'/>
      <TextInput style= {styles.textInput} placeholder='Enter Email'/>
      <Button title='Submit' onPress={()=>{alert("Welcome to KZalap Educational Consult")}}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    color: "#fff",
    fontSize: 32
  },
  textInput:{
    // backgroundColor: "green",
    marginTop: "4rem",
    marginBottom: "4rem",
    fontSize: 20,
    color: "coral"
    // padding
  }
});
