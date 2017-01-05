import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import firebase from 'firebase';

import getAppHeader from './components/common/AppHeader';
import getAppFooter from './components/common/AppFooter';
import LoginForm from './components/LoginFrom';

// Default Theme for Native Base
import defaultTheme from '../Themes/default';

class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC06Cc7Nod_QgPvFn_rL8WQjTfuAGrncEM',
      authDomain: 'authentication-488b6.firebaseapp.com',
      databaseURL: 'https://authentication-488b6.firebaseio.com',
      storageBucket: 'authentication-488b6.appspot.com',
      messagingSenderId: '127008487703'
    });
  }

  render() {
    return (
        <Container theme={defaultTheme}>
          {getAppHeader('Authentication')}
          <Content>
            <LoginForm />
          </Content>
          {getAppFooter()}
        </Container>
      );
  }
}

export default App;
