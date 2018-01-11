import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'app.Home',
      icon: require('./imgs/one.png'),
      selectedIcon: require('./imgs/one_selected.png'),
      title: 'Home'
    },
    {
      label: 'Profile',
      screen: 'app.Profile',
      icon: require('./imgs/two.png'),
      selectedIcon: require('./imgs/two_selected.png'),
      title: 'Profile'
    },
    {
      label: 'Settings',
      screen: 'app.Settings',
      icon: require('./imgs/three.png'),
      selectedIcon: require('./imgs/three_selected.png'),
      title: 'Settings'
    }
  ]
});
