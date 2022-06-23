import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  View
} from 'react-native';

type Props = {};
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
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Four Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Five Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Six Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Seven Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eight Item',
  },
];
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class App extends Component<Props> {
  render() {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 88,
    marginHorizontal: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 24,
  },
 });