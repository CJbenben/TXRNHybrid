/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
import ActivityIndicator from './js/ActivityIndicator';
import Button from './js/Button';
import FlatList from './js/FlatList';
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ActivityIndicator', () => ActivityIndicator);
AppRegistry.registerComponent('Button', () => Button);
AppRegistry.registerComponent('FlatList', () => FlatList);
