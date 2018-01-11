import React, { Component } from 'react';
import { View, Text, AlertIOS } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Content, HeaderText, BodyText } from 'react-native-minimalist';

const MenuIcon = require('../imgs/navicon_menu.png');

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#FAFAFA',
    navBarButtonColor: '#000000',
    navBarSelectedButtonColor: '#000000',
    navBarTextColor: '#000000',
    navBarTitleFontFamily: 'SavoyeLetPlain',
    navBarTitleFontSize: 34
  };

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'menu',
        title: 'Menu',
        icon: MenuIcon
      }
    ],
    rightButtons: [
      {
        id: 'edit',
        testID: 'edit',
        systemItem: 'search'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'edit') {
        AlertIOS.alert('NavBar', 'Edit button pressed!!');
      } else if (event.id === 'search') {
        AlertIOS.alert('NavBar', 'Search button pressed!!');
      }
    }
  }

  render() {
    return (
      <Content>
        <HeaderText>Home</HeaderText>
        <BodyText>
          Some body text that wraps on to the next line with the correct
          padding.
        </BodyText>
      </Content>
    );
  }
}

export default HomeScreen;
