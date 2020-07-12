import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={(require('../../assets/forest.jpg'))}
        score={10}
      />
      <ImageDetail
        title="Beach"
        imageSrc={(require('../../assets/beach.jpg'))}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSrc={(require('../../assets/mountain.jpg'))}
        score={5}
      />
    </View>
  )

}

const styles = StyleSheet.create({

})

export default ImageScreen;
