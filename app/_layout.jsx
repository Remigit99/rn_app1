import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack, Slot} from "expo-router"

const RootLayout = () => {
  return (
    <Stack >

      <Stack.Screen name="demo" options={{headerShown: false}}/>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="profile" />

      
    </Stack>

    // <Slot/>
  )
}

export default RootLayout

const styles = StyleSheet.create({})