import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height, scale} = Dimensions.get('window');

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.txt}>你好！你好！你好！你好！1你好！2345</Text>
          <Text>屏幕的宽度是：{width}</Text>
          <Text>屏幕的高度是：{height}</Text>
          <Text>屏幕的像素比是：{scale}</Text>
          <View style={styles.line}></View>
        </ScrollView>
      </View>
    );
  } 
}

export default Test;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 88,
    // width,
    // height,
    // width: "100%",
    // height: "100%",
    flex: 1,
    backgroundColor: 'pink'
  },
  txt: {
    color: 'red'
  },
  line: {
    width,
    height: 1/scale,
    backgroundColor: '#ccc'
  }
})