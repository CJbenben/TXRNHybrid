// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions, NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from '../pages/Page';

const {width} = Dimensions.get('window')
const methodTool = NativeModules.ViewController;

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params) {
      console.log(route.params);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='返回' onPress={() => {
        methodTool.callback('121');
      }}></Button>
      <Button
        title="跳转第二个页面"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: "123456",
            title: "导航标题",
            otherParam: "花猫云商"
          })
        }}
      />
      <Button title='更新导航栏标题' onPress={()=> {
        navigation.setOptions({
          title: '标题已更新'
        })
      }}></Button>
      <Text>上个页面返回的内容: {route.params?.post}</Text>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  const [postText, setPostText] = React.useState('');
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="继续跳转下一个页面"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="回到RN首页" onPress={() => navigation.navigate('Home')} />
      <Button title="返回上一个页面" onPress={() => navigation.goBack() }/>
      
      <TextInput
        style={styles.input}
        placeholder='请输入回传内容'
        clearButtonMode='while-editing'
        value={postText}
        onChangeText={setPostText}></TextInput>
      <Button title="返回上一个页面，传递参数" onPress={() => {
          navigation.navigate({
          name: 'Home',
          params: {post: postText}
        })
      }} />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  input: {
    height: 45,
    width: width*0.9,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#cce'
  }
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home2',
            headerStyle: {
              backgroundColor: '#fcf'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#000'
            },
            headerRight: ()=> (
              <Button title='分享'
                color='#000'
                onPress={()=> {
                  console.log('分享按钮被点击');
              }}></Button>
            ),
            // 自定义返回按钮颜色和图片
            headerTintColor: '#666',
            headerBackImageSource:{ uri: 'ic_public_navi_back', width: 24, height: 24, color: '#000'}
          }} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={( {route} ) => ({
            title: route.params.title,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#000'
            },
            headerBackTitleVisible: false,
            headerBackTitleStyle: {
              fontSize: 14
            },
            // 自定义返回按钮颜色和图片
            headerTintColor: '#666',
            headerBackImageSource:{ uri: 'ic_public_navi_back', width: 24, height: 24, color: '#000'}
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const DefaultHeader: NativeStackNavigationOptions = {
//   headerBackImageSource:
//         Platform.OS === 'android'
//             ? require('../../Resources/Images/Icons/back.png')
//             : { uri: 'back', width: 24, height: 24 }, // pull from assets, to avoid icon changing from default to custom
// }

export default App;