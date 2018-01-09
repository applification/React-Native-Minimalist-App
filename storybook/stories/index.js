import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

import { Text, Content } from 'react-native-elements-minimalist';

storiesOf('Minimalist UI Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => <Text>Hey Hey Hey!!!</Text>)
  .add('Text Other', () => <Text>Other text</Text>);

storiesOf('Minimalist UI Content', module)
  .add('DefaultProps (white)', () => <Content />)
  .add('Passed in Props (pink)', () => (
    <Content backgroundColor="pink">
      <Text>Children props</Text>
    </Content>
  ));
