import React, { Component } from 'react';
import {View, StyleSheet, Button, NativeModules} from 'react-native';
const methodTool = NativeModules.nativeView;

class NativeModulesDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='调用原生弹框' onPress={() => {
          methodTool.doSomething("我是rn传过来的数据")
        }}></Button>
        <Button title='push原生页面' onPress={() => {
          console.log('111');
          methodTool.pushNextvc("我是rn传过来的数据")
        }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default NativeModulesDemo;
