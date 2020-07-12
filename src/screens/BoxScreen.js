import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  )

}

const styles = StyleSheet.create({
  parentStyle: {
    // borderWidth: 3,
    // borderColor: 'black',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // height: 200
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    backgroundColor: 'blue',
    height: 80,
    width: 80
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    height: 80,
    width: 80,
    top: 80
    //...StyleSheet.absoluteFillObject, //top:0,right:0,left:0,bottom:0,position:'absolute',
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    height: 80,
    width: 80
  }
})

export default BoxScreen;