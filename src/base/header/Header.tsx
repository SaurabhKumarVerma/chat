import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop: insets.top}}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})