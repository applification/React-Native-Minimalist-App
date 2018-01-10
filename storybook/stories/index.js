import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

import {
  Content,
  HeaderText,
  BodyText,
  Profile,
  Divider,
  Image
} from 'react-native-minimalist';

storiesOf('Content', module)
  .add('DefaultProps (white)', () => (
    <Content>
      <HeaderText>Children props</HeaderText>
    </Content>
  ))
  .add('Passed in Props (pink)', () => (
    <Content backgroundColor="pink">
      <HeaderText>Children props</HeaderText>
    </Content>
  ));

storiesOf('HeaderText', module)
  .add('HeaderText', () => <HeaderText>Big Header</HeaderText>)
  .add('HeaderText in red', () => (
    <HeaderText color="red">Red Header</HeaderText>
  ))
  .add('HeaderText should be single line even if long', () => (
    <HeaderText>React Native Minimalist</HeaderText>
  ));

storiesOf('BodyText', module).add('BodyText', () => (
  <BodyText>Body text</BodyText>
));

storiesOf('Profile', module)
  .add('Profile', () => <Profile />)
  .add('Profile URI', () => (
    <Profile
      source={{
        uri:
          'https://pbs.twimg.com/profile_images/941645845409226752/Lt1apZ3Q_400x400.jpg'
      }}
    />
  ));

storiesOf('Divider', module)
  .add('Divider', () => <Divider />)
  .add('Divider Red', () => <Divider color="red" />)
  .add('Divider fullWidth', () => <Divider fullWidth />);

storiesOf('Image', module).add('Image', () => (
  <Image
    imageURL={
      'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
    }
  />
));
