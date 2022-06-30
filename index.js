/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
import ActivityIndicator from './js/ActivityIndicator';
import Button from './js/Button';
import TouchableOpacity from './js/TouchableOpacity';
import FlatList from './js/FlatList';
import Image from "./js/Image";
import ImageBackground from "./js/ImageBackground";
import KeyboardAvoidingView from "./js/KeyboardAvoidingView"
import Pressable from "./js/Pressable"
import ScrollView from "./js/ScrollView"
import StatusBar from "./js/StatusBar"
import Switch from "./js/Switch"
import Text from "./js/Text"
import Flex from './js/Flex'
import Flex2 from './js/Flex2';
import WebView from './js/WebView';

import Test from "./js/Test"
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ActivityIndicator', () => ActivityIndicator);
AppRegistry.registerComponent('Button', () => Button);
AppRegistry.registerComponent('TouchableOpacity', () => TouchableOpacity);
AppRegistry.registerComponent('FlatList', () => FlatList);
AppRegistry.registerComponent('Image', () => Image);
AppRegistry.registerComponent('ImageBackground', () => ImageBackground);
AppRegistry.registerComponent('KeyboardAvoidingView', () => KeyboardAvoidingView);
AppRegistry.registerComponent('Pressable', () => Pressable);
AppRegistry.registerComponent('ScrollView', () => ScrollView);
AppRegistry.registerComponent('StatusBar', () => StatusBar);
AppRegistry.registerComponent('Switch', () => Switch);
AppRegistry.registerComponent('Text', () => Text);
AppRegistry.registerComponent('Flex', () => Flex);
AppRegistry.registerComponent('Flex2', () => Flex2);
AppRegistry.registerComponent('WebView', () => WebView);

AppRegistry.registerComponent('Test', () => Test);