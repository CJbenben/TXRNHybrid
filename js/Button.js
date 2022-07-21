import React, { Component } from 'react';
import {
  Alert, Button, Platform, StyleSheet, Text, View, Linking} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      num: 20
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Text>{this.state.num}</Text>
        <Button
          title="Press me!"
          color='skyblue'
          // onPress={() => alert('Simple Button pressed')}
          onPress={() => {
            this.setState({
              num: this.state.num+1
            })
          }}
        />
        <Button title='跳转花猫H5页面' onPress={()=>{
          Linking.openURL('https://famall.famalltech.com/')
        }}></Button>
        <Button title='打开微信' onPress={()=>{
          Linking.openURL('weixin://')
        }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
 });