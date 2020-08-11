import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Button onPress={pressHandler} title='Back To Home' />
    </View>
  )
}

const styles = StyleSheet.create({
  
})
