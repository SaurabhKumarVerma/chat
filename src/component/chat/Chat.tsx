import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import Footer from "../Footer";
import ChatHeader from "./ChatHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatBody from "./ChatBody";
import useMessageStore from "../../store/message.store";
import ChatSend from "./ChatSend";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

const Chat = () => {
  const { messageList, isLoading, error, fetchMessage } = useMessageStore();

  useEffect(() => {
    fetchMessage();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    console.log("Error");
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#E1D9D1" }}>
      <View style={{ flex: 1 }}>
        <ChatHeader />

        <ChatBody messageList={messageList} />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ width: "100%" }}>
            <Footer content={<ChatSend />} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaProvider>
  );
};

export default Chat;

const styles = StyleSheet.create({});
