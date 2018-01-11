import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();
const appStyle = {
  orientation: 'portrait',
  hideBackButtonTitle: false,
  navBarLeftButtonColor: '#000000',
  navBarLeftButtonFontSize: 14,
  navBarLeftButtonFontWeight: '600',
  navBarRightButtonColor: '#000000',
  navBarRightButtonFontSize: 14,
  navBarRightButtonFontWeight: '600'
};

const navigatorStyle = {
  navBarBackgroundColor: '#FAFAFA',
  navBarButtonColor: '#000000',
  navBarSelectedButtonColor: '#000000',
  navBarTextColor: '#000000'
};

const tabsStyle = {
  tabBarBackgroundColor: '#FAFAFA',
  tabBarSelectedButtonColor: '#000000'
};

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'app.Home',
      icon: require('./imgs/one.png'),
      selectedIcon: require('./imgs/one_selected.png'),
      title: 'Instagrammy',
      iconInsets: {
        top: 6,
        left: 0,
        bottom: -6,
        right: 0
      }
    },
    {
      screen: 'app.Profile',
      icon: require('./imgs/two.png'),
      selectedIcon: require('./imgs/two_selected.png'),
      title: 'Profile',
      iconInsets: {
        top: 6,
        left: 0,
        bottom: -6,
        right: 0
      }
    },
    {
      screen: 'app.Settings',
      icon: require('./imgs/three.png'),
      selectedIcon: require('./imgs/three_selected.png'),
      title: 'Settings',
      iconInsets: {
        top: 6,
        left: 0,
        bottom: -6,
        right: 0
      }
    }
  ],
  appStyle,
  tabsStyle
});
