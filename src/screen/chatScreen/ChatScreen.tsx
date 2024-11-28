import { StyleSheet, View } from 'react-native'
import React from 'react'
import Chat from '../../component/chat/Chat'

const ChatScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Chat />
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})