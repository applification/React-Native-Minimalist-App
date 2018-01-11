/* eslint-disable global-require */
// https://github.com/Charlynux/nativestorybook
import { Navigation } from 'react-native-navigation';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 9001, onDeviceUI: false });
Navigation.registerComponent('storybook.UI', () => StorybookUI);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'storybook.UI',
    title: 'Storybook'
  }
});

export default StorybookUI;
