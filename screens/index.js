import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

export function registerScreens() {
  Navigation.registerComponent('app.Home', () => HomeScreen);
  Navigation.registerComponent('app.Profile', () => ProfileScreen);
  Navigation.registerComponent('app.Settings', () => SettingsScreen);
}
