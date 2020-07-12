import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = 'Adebayo Steve'
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
})

export default ComponentScreen;