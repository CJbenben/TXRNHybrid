/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
import ActivityIndicator from './js/ActivityIndicator';
import Button from './js/Button';
import FlatList from './js/FlatList';
import Image from "./js/Image";
import ImageBackground from "./js/ImageBackground";
import KeyboardAvoidingView from "./js/KeyboardAvoidingView"
import Pressable from "./js/Pressable"
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ActivityIndicator', () => ActivityIndicator);
AppRegistry.registerComponent('Button', () => Button);
AppRegistry.registerComponent('FlatList', () => FlatList);
AppRegistry.registerComponent('Image', () => Image);
AppRegistry.registerComponent('ImageBackground', () => ImageBackground);
AppRegistry.registerComponent('KeyboardAvoidingView', () => KeyboardAvoidingView);
AppRegistry.registerComponent('Pressable', () => Pressable);