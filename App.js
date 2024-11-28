import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import ChatScreen from './src/screen/chatScreen/ChatScreen';

export default function App() {
  // const { messageList, isLoading, error, fetchMessage } = useMessageStore()

useEffect(() => {
  // fetchMessage()
}, [])

  return (
    <View style={styles.container}>
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
