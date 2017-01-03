import React from 'react';
import { Header, Title, Button, Icon } from 'native-base';

export default (title) => (
  <Header>
    <Button transparent>
      <Icon name='ios-arrow-back' />
    </Button>
    <Title styleName="sm-gutter-bottom">{title}</Title>
    <Button transparent>
      <Icon name='ios-menu' />
    </Button>
  </Header>
);
