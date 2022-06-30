import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

class APP extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://famall.famalltech.com/'}}></WebView>
    );
  }
}

const styles = StyleSheet.create({})

export default APP;
