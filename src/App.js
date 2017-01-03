import React, { Component } from 'react';
import { ScrollView } from '@shoutem/ui';

import AppHeader from './components/AppHeader';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <AppHeader title='Authentication' />
      </ScrollView>
    );
  }
}

export default App;
