import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { BLUR_HASH } from '../../constant/constant';


interface IAvatar {
  avatarUrl: string
}
const Avatar = (props:IAvatar) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={props.avatarUrl}
        placeholder={{ BLUR_HASH }}
        contentFit="cover"
        transition={1000}
        cachePolicy='memory'
      />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88e788',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36, 
    height: 36, 
    borderRadius: 18
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderRadius: 18
  },
});