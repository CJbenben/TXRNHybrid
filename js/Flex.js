import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}><Text style={{fontSize: 20}}>1</Text></View>
        <View style={styles.box2}><Text style={{fontSize: 40}}>2</Text></View>
        <View style={styles.box3}><Text style={{fontSize: 30}}>3</Text></View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    // justifyContent: 'space-around'
    // justifyContent: 'space-evenly',
    // 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    alignItems: 'baseline'
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc'
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#fcf'
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: '#ffc'
  },
})

export default Flex;
