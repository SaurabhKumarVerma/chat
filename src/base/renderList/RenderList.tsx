import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';

interface IRenderListProps<T> {
    data: T[]
    renderItem: FlashListProps<any>['renderItem']
    keyExtractor?: (item: T, index: number) => string
    flashListProps?: Partial<FlashListProps<T>>
}

const RenderList = <T,>(props:IRenderListProps<T>) => {
    return (
        <View style={styles.container}>
            <FlashList
                data={props.data}
                renderItem={props.renderItem}
                keyExtractor={props.keyExtractor}
                estimatedItemSize={100}
                {...props.flashListProps}
            />
        </View>
    );
};

export default RenderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
