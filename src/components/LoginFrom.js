import React, { Component } from 'react';
import { Tabs } from 'native-base';

import Signin from './common/Signin';
import Signup from './common/Signup';

class LoginForm extends Component {
  render() {
    return (
      <Tabs>
        <Signin tabLabel='Log In' />
        <Signup tabLabel='Create Account' />
      </Tabs>
    );
  }
}

export default LoginForm;
