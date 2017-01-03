import React from 'react';
import {Caption, Title, Tile} from '@shoutem/ui';

const AppHeader = (props) => (
  <Tile styleName="text-centric">
    <Title styleName="sm-gutter-bottom">{props.title}</Title>
    <Caption>Authenticate or Register</Caption>
  </Tile>
);

export default AppHeader;
