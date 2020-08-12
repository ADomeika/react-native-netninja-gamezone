import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global';

export default ReviewForm = () => {
  const submitHandler = values => {
    console.log(values)
  }

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: ''
        }}
        onSubmit={values => submitHandler(values)}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Review rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
            />
            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({

})
