import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';

const {width, height, scale} = Dimensions.get('window');

const dataAry = [
  {
    id: 1,
    title: 10
  },
  {
    id: 2,
    title: 20
  },
  {
    id: 3,
    title: 30
  },
  {
    id: 4,
    title: 40
  },
]
class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataAry: dataAry
    }
  }
  item({item}) {
    return (
      <Text>{item.id}、{item.title}</Text>
    );
  }

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
        <FlatList
        numColumns={1}
        data={this.state.dataAry}
        renderItem={this.item}></FlatList>
      </View>
    );
  } 
}

export default Test;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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