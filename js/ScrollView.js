import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸
type Props = {};
const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginHorizontal: 0,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: "space-between",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 36,
    marginBottom: 10
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