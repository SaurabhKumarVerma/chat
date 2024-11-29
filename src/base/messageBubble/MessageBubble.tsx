import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TMessageJSON } from "../../types/message.type";
import Avatar from "../avatar/Avatar";

interface IMessageBubble {
    message: TMessageJSON;
}
const MessageBubble = (props: IMessageBubble) => {
    
    return (
        <View style={props.message?.authorUuid !== "you" ? {flexDirection: 'row'} : null}>
            {props.message?.authorUuid !== "you" ? (
                <View style={{marginLeft: 10}}>
                    <Avatar  avatarUrl={props.message.avatarUrl}/>
                </View>
            ) : null}
            <View
                style={
                    props.message?.authorUuid !== "you"
                        ? {
                            ...styles.container,
                            backgroundColor: "#88e788",
                            alignSelf: "flex-start",
                        }
                        : styles.container
                }
                key={1}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: "#fff",
                        marginRight: props.message?.authorUuid !== "you" ? 10 : 30,
                        marginLeft: props.message?.authorUuid !== "you" ? 0 : 30,
                    }}
                    key={1}
                >
                    {props.message?.text}
                </Text>

                <View style={{ top: 6 }}>
                    <View
                        style={
                            props.message?.authorUuid !== "you"
                                ? { ...styles.leftArrowOverlap, backgroundColor: "#88e788" }
                                : styles.rightArrowOverlap
                        }
                    ></View>
                </View>
            </View>
        </View>
    );
};

export default MessageBubble;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0078fe",
        padding: 10,
        marginLeft: "4%",
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        alignSelf: "flex-end",
        maxWidth: "50%",
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#0078fe",
        width: 10,
        height: 35,
        bottom: -8,
        borderBottomLeftRadius: 18,
        right: -10,
        alignSelf: "flex-end",
    },
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "green",
        width: 10,
        height: 35,
        bottom: -8,
        borderBottomRightRadius: 18,
        left: -10,
    },
});
