import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import useHandleTextInput from "../../store/sendMessage.store";
import useMessageStore from "../../store/message.store";

const ChatSend = () => {
  // const {message, handleTextInput,sendMessage} = useHandleTextInput()
 const {handleTextInput, sendMessage, message} = useMessageStore()

  const onChangeText = (value: string) => {
    handleTextInput(value)
  }
  
  return (
    <View
      style={styles.container}
    >
      <TextInput
        multiline
        value={message}
        style={styles.textInputStyle}
        placeholder="Type a message"
        onChangeText={onChangeText}
      />
      <Pressable style={{ marginHorizontal: 10 }} onPress={sendMessage}>
        <FontAwesome name="send" size={26} color={"#54656F"}/>
      </Pressable>
    </View>
  );
};

export default ChatSend;

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: "white",
    width: "84%",
    paddingVertical: 14,
    paddingLeft: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
});
