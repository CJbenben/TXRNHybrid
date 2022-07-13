import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
        title="跳转第二个页面"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: "123456",
            title: "导航标题",
            otherParam: "花猫云商"
          })
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({})

export default Home;
