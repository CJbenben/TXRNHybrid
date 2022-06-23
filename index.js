/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ActivityIndicator from './ActivityIndicator';
import Button from './Button';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ActivityIndicator', () => ActivityIndicator);
AppRegistry.registerComponent('Button', () => Button);
