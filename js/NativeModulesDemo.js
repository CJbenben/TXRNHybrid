import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button, FlatList, NativeModules} from 'react-native';
const methodTool = NativeModules.nativeView;

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>苏州天气</Text>
      <Text style={styles.content}>日期：{item.date}</Text>
      <Text style={styles.date}>温度：{item.temperature}</Text>
      <Text style={styles.date}>天气：{item.weather}</Text>
      <Text style={styles.date}>风向：{item.direct}</Text>
    </View>
  );
}

class NativeModulesDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataAry: [1, 2, 3]
    }
  }
  render() {
    const renderItem = ({ item }) => (
      <Item item={item} />
    );
    return (
      <View style={styles.container}>
        <Button title='调用原生弹框' onPress={() => {
          methodTool.doSomething("我是rn传过来的数据")
        }}></Button>
        <Button title='push原生页面' onPress={() => {
          console.log('111');
          methodTool.pushNextvc("我是rn传过来的数据")
        }}></Button>
        <Button title='接收原生回调数据' onPress={()=> {
          methodTool.httpRequest((error, data) => {
            if (error) {
              console.error(error);
            } else {
              //console.log(JSON.stringify(data.result.data))
              //this.setState({events: events});
              this.setState({
                dataAry: data.result.future
              });
              //console.log(this.state.dataAry);
            }
          })
        }}></Button>
        <FlatList
          numColumns={1}
          data={this.state.dataAry}
          // data={data}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemImg: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 16,
  },
  content: {
    fontSize: 14,
  },
  date: {
    textAlign: 'left'
  }
})

export default NativeModulesDemo;
