import React, { Component } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Page extends Component {
  render() {
    return (
      <View>
        <Text>Page</Text>
        <Button title='返回上一个页面'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({})

export default Page;
