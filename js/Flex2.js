import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

class Row extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.box1}><Text>1</Text></View>
        <View style={styles.box2}><Text>2</Text></View>
        <View style={styles.box3}><Text>3</Text></View>
      </View>
    )
  }
}

class Flex2 extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View><Text>Flex练习</Text></View>
          <View style={styles.box}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 188,
    alignItems: 'center'
  },
  box: {
    width: width * 0.9,
    height: 200,
    backgroundColor: '#ccc',
    marginTop: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fcf'
  },
  box1: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: 'red'
  },
  box2: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  box3: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'red'
  }
})

export default Flex2;
