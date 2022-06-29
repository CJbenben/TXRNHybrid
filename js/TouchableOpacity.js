import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class CustomButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 20
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.num}</Text>
        <TouchableOpacity onPress={() => {
            this.setState({
              num: this.state.num+1
            })
        }} style={styles.btn}><Text>点击自增</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomButton;
