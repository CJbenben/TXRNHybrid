// 使用第三方库 react-native-vector-icons
// 所有 icon 资源在这里搜索查询：https://oblador.github.io/react-native-vector-icons/
import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>使用第三方库【react-native-vector-icons】引入图片或者文字</Text>
        <Icon name='home' size={40} color='pink'></Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 88
  }
})

export default IconDemo;
