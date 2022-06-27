import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: "This is not really a bird nest.这个 App.js 文件代表了我们React Native的一个页面，在这个页面中显示了 this is App 的文本内容。以上就是为本次演示所添加的React Native代码，你也可以根据需要添加更多的React Native代码以及组件出来。 此过程更细致的讲解可查阅：React Native与iOS 混合开发讲解的视频教程为React Native创建一个ViewController和RCTRootView来作为容器[]( https://www.devio.org/2020/04...经过上述3、4步，我们已经为RNHybridiOS项目添加了React Native依赖，并且创建一些React Native代码和注册了一个名为 App1 的组件，接下来我们来学习下如何在RNHybridiOS项目中使用这个 App1 组件。创建RNPageController[]( https://www.devio.org/2020/04...首先我们需要创建一个ViewController和RCTRootView来作为React Native的容器。",
      firstText: "I am bold ",
      secondText: "and red"
    };
  }

  onPressTitle = () => {
    this.setState({ titleText: "Bird's Nest [pressed]" });
  };

  render() {
    return (
      <Text style={styles.container}>
        <Text
          style={styles.titleText}
          onPress={this.onPressTitle}
        >
          {"\n"}
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text style={{height: 30}} numberOfLines={5} ellipsizeMode={'tail'}>
          {this.state.bodyText}
          {"\n"}
          {"\n"}
          </Text>
        <Text onPress={() => console.log('1st')}>{this.state.firstText}
          <Text style={styles.red}>{this.state.secondText}</Text>
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    // marginHorizontal: 0,
    // justifyContent: 'center'
  },
  red: {
    fontSize: 40,
    color: 'red'
  }
});