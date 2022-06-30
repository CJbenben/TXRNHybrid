import React, { Component } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

class TextInputDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder={'请输入...'}
          placeholderTextColor='pink'
          maxLength={8}
          backgroundColor='white'
          // secureTextEntry={true}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    height: 40,
    marginTop: 88,
    paddingLeft: 20
  }
})

export default TextInputDemo;
