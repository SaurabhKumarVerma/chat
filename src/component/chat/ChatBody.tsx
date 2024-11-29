import { StyleSheet, View } from "react-native";
import React from "react";
import RenderList from "../../base/renderList/RenderList";
import MessageBubble from "../../base/messageBubble/MessageBubble";
import { BOTTOM_HEIGHT } from "../../constant/bottomHeight";
import { TMessageJSON } from "../../types/message.type";

interface IChatBody {
    messageList: TMessageJSON[];
}
const ChatBody = (props: IChatBody) => {
    
    const renderItem = (item:TMessageJSON) => {
        return (
            <View style={{marginBottom: BOTTOM_HEIGHT}}>
                <MessageBubble message={item} />
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <RenderList
                flashListProps={{ inverted: true, showsVerticalScrollIndicator: false,}}
                keyExtractor={(item, index) => index.toString()}
                data={[...props.messageList]?.reverse()}
                renderItem={({ item }) => renderItem(item)}
                containerStyle={{paddingBottom: '20%'}}
            />
        </View>
    );
};

export default ChatBody;

const styles = StyleSheet.create({});
