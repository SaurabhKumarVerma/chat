import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'


interface IFooter {
  content: ReactElement
}
const Footer = (props:IFooter) => {
  return (
    <View style={{
      backgroundColor: '#F7F7F7',  
      position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        minHeight: 80,
        }}>
      {props.content}
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})