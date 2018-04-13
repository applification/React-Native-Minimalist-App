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
              'https://scontent-lhr3-1.cdninstagram.com/vp/157f88d298739845194d19096bc9834f/5B6F2F47/t51.2885-15/e35/28157443_404441573303128_568809590188146688_n.jpg'
            }
          />
        </Content>
      </ScrollView>
    );
  }
}

export default HomeScreen;
