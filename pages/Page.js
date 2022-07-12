import React, { Component } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Page extends Component {
  render({ navigation }) {
    return (
      <View>
        <Text>1233333333332233333331</Text>
        <Button title='返回上一个页面' onPress={()=> {
          navigation.goBack()
        }}></Button>
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({})

export default Page;
