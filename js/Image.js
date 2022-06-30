import React, { Component } from 'react';
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions
} from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸
type Props = {};
const {width} = Dimensions.get('window')
export default class App extends Component<Props> {
  render() {
    let networkImg = 'https://reactnative.dev/img/tiny_logo.png';
    return (
      <ScrollView style={styles.container}>
        {/* 本地图片 */}
        <Text style={styles.title}>1.本地图片</Text>
        <Image
          style={styles.hmLogo}
          source={require('../static/logo.png')}
        />
        {/* gif 图片 */}
        <Text style={styles.title}>2.gif 图片</Text>
        <Image
          style={styles.gif}
          source={require('../static/gif.gif')}
        />

        {/* 加载原生图片 */}
        <Text style={styles.title}>3.原生iOS项目中图片</Text>
        <Image style={styles.nativeImg} source={{uri: 'ic_test'}}></Image>
        {/* 网络图 */}
        <Text style={styles.title}>4.网络图</Text>
        <Image
          style={styles.tinyLogo}
          // 网络图未加载出来之前的默认图
          defaultSource={require('../static/logo.png')}
          source={{uri: networkImg}}
          resizeMode="contain"
          onLoadStart={
            console.log('onLoadStart')
          }
          onProgress={ (loaded, total)=> {
              console.log(123+loaded)
              console.log(total)
            }
          }
          onLoadEnd={
            console.log('onLoadEnd')
          }
        />
        <Text style={styles.title}>5.base64图</Text>
        <Image
          style={styles.hmLogo}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <Button
          title="获取图片尺寸"
          // onPress={() => alert('Simple Button pressed')}
          onPress={() => {
            Image.getSize(networkImg, (width, height) => {
              //取得图片的宽高，并进行相应的处理
              console.log('width='+width+',height='+height)
            }, (error)=>{
              console.log(error)
            });
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    marginHorizontal: 0,
    // marginBottom: 100,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    marginHorizontal: 16,
    padding: 10,
  },
  hmLogo: {
    width: 80,
    resizeMode: 'contain'
    // height: 80
  },
  gif: {
    resizeMode: 'stretch',
    // blurRadius: 30,
    width,
    // 设置圆角
    borderRadius: 20,
  },
  nativeImg: {
    width,
    height: 180,
    resizeMode: 'stretch',
  },
  tinyLogo: {
    width: 80,
    height: 180,
  },
  logo: {
    width: 100,
    height: 100,
  },
 });