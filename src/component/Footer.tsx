import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={{backgroundColor: 'green',  position: 'absolute',
     
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 10,
        minHeight: 80,
        }}>
      <Text>Footer</Text>
      <Text>Footer</Text>

    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})