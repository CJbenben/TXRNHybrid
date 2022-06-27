import React, { Component } from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸
type Props = {};
const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.title}>这个是背景上面的文字</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    marginHorizontal: 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    backgroundColor: '#000000a0',
    marginHorizontal: 20,
    padding: 20,
  },
 });