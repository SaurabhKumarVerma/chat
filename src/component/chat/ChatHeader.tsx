import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatHeader = () => {
    const insets = useSafeAreaInsets();
  return (
    <View style={{
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: insets.top
    }}>
      <Text>ChatHeader</Text>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})