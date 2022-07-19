import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

const opacity = 1
class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: opacity
    }
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')

    // const intervalId = setInterval(() => {
    //   var opacity = this.state.opacity
    //   opacity -= 0.2
    //   if (opacity < 0.1) {
    //     opacity = 1
    //     clearInterval(intervalId)
    //   }
    //   console.log(opacity);
    //   this.setState({
    //     opacity: opacity
    //   })
    // }, 1000);
    const timeOutId = setTimeout(() => {
      var opacity = this.state.opacity
      opacity -= 0.5
      if (opacity < 0.1) {
        opacity = 1
        // 停止定时器
        //clearTimeout(timeOutId)
      }
      console.log(opacity);
      this.setState({
        opacity: opacity
      })
    }, 1000);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    return true;
  }
  // componentWillUpdate(nextProps, nextState) {
  //       console.log('Component WILL UPDATE!');
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, opacity: this.state.opacity}}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
    alignItems: 'center'
  }
})

export default LifeCycle;
