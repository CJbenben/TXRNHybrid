/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import A from './A';
import B from './B';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('A', () => A);
AppRegistry.registerComponent('B', () => B);
