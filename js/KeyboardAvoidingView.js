import React, { Component } from 'react';
import {
  View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard
} from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸
type Props = {};
const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled={true}
      // keyboardVerticalOffset={300}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="请输入用户名" style={styles.textInput} clearButtonMode='while-editing' />
          <TextInput placeholder="请输入密码" secureTextEntry={true} style={styles.textInput} clearButtonMode='always' />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    marginHorizontal: 0,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: "space-between",
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 20
  },
  textInput: {
    height: 40,
    borderColor: "#666666",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  btnContainer: {
    backgroundColor: "#f5f5f5",
    marginTop: 12
  }
 });