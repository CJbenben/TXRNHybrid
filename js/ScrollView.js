import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// 注意：通过uri加载资源，必须设置图片尺寸

type Props = {};
const {width} = Dimensions.get('window');
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      currPage: 1
    }
    this.handleMomentumScrollEnd = this.handleMomentumScrollEnd.bind(this)
  }
  handleMomentumScrollEnd(e) {
    // console.log(e.nativeEvent.contentOffset.x)
    let offsetX = e.nativeEvent.contentOffset.x
    this.setState({
      currPage: offsetX/width+1
    })
  }
  componentDidMount() {
    let scrollview = this.refs.scrollview;
    let num = 0;

    setInterval(() => {
      num++
      if (num === 3) {
        num = 0
      }
      scrollview.scrollTo({
        x: width*num,
        y: 0,
        animate: true
      })

    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
        ref="scrollview"
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={this.handleMomentumScrollEnd}
        >
          <View><Text style={styles.box1}>1</Text></View>
          <View><Text style={[styles.box1, styles.box2]}>2</Text></View>
          <View><Text style={[styles.box1, styles.box3]}>3</Text></View>
        </ScrollView>
        <View style={styles.pointBox}>
          <View style={this.state.currPage == 1?styles.currPoint:styles.point}></View>
          <View style={this.state.currPage == 2?styles.currPoint:styles.point}></View>
          <View style={this.state.currPage == 3?styles.currPoint:styles.point}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginTop: 88
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
  text: {
    fontSize: 36,
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: "#666666",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  btnContainer: {
    backgroundColor: "#f5f5f5",
    marginTop: 12
  },
  pointBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: width,
    bottom: 5,
    height: 10
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginLeft: 3,
    marginRight: 3
  },
  currPoint: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'yellow',
    marginLeft: 3,
    marginRight: 3
  }
 });