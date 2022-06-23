/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import ActivityIndicator from './js/ActivityIndicator';
import Button from './js/Button';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ActivityIndicator', () => ActivityIndicator);
AppRegistry.registerComponent('Button', () => Button);
