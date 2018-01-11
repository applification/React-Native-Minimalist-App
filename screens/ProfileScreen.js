import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Content, HeaderText, BodyText } from 'react-native-minimalist';

class ProfileScreen extends Component {
  render() {
    return (
      <Content>
        <HeaderText>Profile</HeaderText>
        <BodyText>
          Some body text that wraps on to the next line with the correct
          padding.
        </BodyText>
      </Content>
    );
  }
}

export default ProfileScreen;
