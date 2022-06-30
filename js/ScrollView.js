import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸
type Props = {};
const {width} = Dimensions.get('window');
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        >
          <View><Text style={styles.box1}>1</Text></View>
          <View><Text style={[styles.box1, styles.box2]}>2</Text></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginTop: 88
  },
  box1: {
    width,
    height: 200,
    backgroundColor: '#ccc'
  },
  box2: {
    backgroundColor: '#fcf'
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