// 使用 react-native-swpier 组件完成 banner 自动轮播
import React, { Component } from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')
class SwiperDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          horizontal={true}
          loop={true}
          // showsButtons={true}
          showsPagination={true}
          autoplay={true}
          autoplayTimeout={2.0}
          dot={<View style={{backgroundColor: 'pink', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3}}></View>}
          activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3}}></View>}
          paginationStyle={{
            bottom: 10, right: 10, left: null
          }}
          >
            <View><Text style={styles.box1}>1</Text></View>
            <View><Text style={[styles.box1, styles.box2]}>2</Text></View>
            <View><Text style={[styles.box1, styles.box3]}>3</Text></View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
    height: 200
  },
  box1: {
    width,
    height: 200,
    backgroundColor: '#ccc'
  },
  box2: {
    backgroundColor: '#fcf'
  },
  box3: {
    backgroundColor: '#ffc'
  },
})

export default SwiperDemo;
