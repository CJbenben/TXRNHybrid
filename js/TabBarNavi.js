// TabBarNavi
import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Page from '../pages/Page';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import global from '../global/global';

const Tab = createBottomTabNavigator();

function TabBarNavi() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          // headerStyle: {
          //   height: 64, // Specify the height of your custom header
          // }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={Home}
          options={{
            tabBarIcon: ({ tintColor}) => (
              <Image
                source={{url: 'ic_tabbar_home_normal'}}
                style={styles.icon}
              />
            ),
            // tabBarLabelStyle: global.tabBarLabelStyle,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#333'
          }}
        ></Tab.Screen>
        <Tab.Screen 
          name='Page' 
          component={Page}
          options={{
            tabBarLabel: 'Page2',
            tabBarIcon: ({ tintColor}) => (
              <Image
                source={{url: 'ic_tabbar_cate_normal'}}
                style={styles.icon}
              />
            ),
            // tabBarStyle: {
            //   backgroundColor: '#fcf',
            //   minHeight: 49,
            // },
            tabBarBadge: 11,
            // tabBarLabelStyle: global.tabBarLabelStyle,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#333'
          }}
        ></Tab.Screen>
        <Tab.Screen 
          name='Settings' 
          component={Settings}
          options={{
            tabBarIcon: ({ tintColor}) => (
              <Image
                source={{url: 'ic_tabbar_mine_normal'}}
                style={styles.icon}
              />
            ),
            // tabBarLabelStyle: global.tabBarLabelStyle
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#333',
            // tabBarActiveBackgroundColor: 'pink',
            // tabBarInactiveBackgroundColor: '#fff'
            // tabBarItemStyle
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})

export default TabBarNavi;
