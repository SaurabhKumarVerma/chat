import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import ChatScreen from './src/screen/chatScreen/ChatScreen';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function App() {
  // const { messageList, isLoading, error, fetchMessage } = useMessageStore()

useEffect(() => {
  // fetchMessage()
}, [])

  return (
    <KeyboardProvider enabled >
    <View style={styles.container}>
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
