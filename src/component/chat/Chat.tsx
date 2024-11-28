import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../base/header/Header";
import Footer from "../Footer";
import ChatHeader from "./ChatHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatBody from "./ChatBody";

const Chat = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <ChatHeader />

        <ChatBody />

        <Footer />
      </View>
    </SafeAreaProvider>
  );
};

export default Chat;

const styles = StyleSheet.create({});
