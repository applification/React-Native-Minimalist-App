import React, { Component } from 'react';
import { View, Text, AlertIOS, Image, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {
  Content,
  HeaderText,
  BodyText,
  Profile,
  Photo,
  PhotoInfo
} from 'react-native-minimalist';

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
        id: 'search',
        testID: 'search',
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
      if (event.id === 'search') {
        AlertIOS.alert('NavBar', 'Search button pressed!!');
      } else if (event.id === 'menu') {
        AlertIOS.alert('NavBar', 'Menu button pressed!!');
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <Content>
          <PhotoInfo
            photo={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }}
            title="bentierney"
            subtitle="Guitar Center"
            icon={require('../imgs/more.png')}
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
        </Content>
      </ScrollView>
    );
  }
}

export default HomeScreen;
