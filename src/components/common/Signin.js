import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Button,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Text,
  Spinner } from 'native-base';
import firebase from 'firebase';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    loggedIn: null
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFail(error) {
    this.setState({ loading: false });

    const errorCode = error.code;
    if (errorCode === 'auth/weak-password') {
      this.setState({ error: 'The password needs to have at least 6 characters' });
    } else {
      this.setState({ error: errorCode });
    }
  }

  onSignOut() {
    firebase.auth().signOut();
  }

  handleClick() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <Button
              block
              title='Log Out'
              style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}
              onPress={this.onSignOut.bind(this)}
            >
              Log Out
            </Button>
          </Card>
        );

      case false:
        return (
          <Card>
            <CardItem>
              <List>
                <ListItem>
                  <InputGroup>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Input
                      placeholder="user@email.com"
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                    />
                  </InputGroup>
                </ListItem>

                <ListItem>
                  <InputGroup>
                    <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                    <Input
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                      placeholder="password" secureTextEntry
                    />
                  </InputGroup>
                </ListItem>
              </List>
            </CardItem>

            <CardItem>
              { this.renderButton() }
            </CardItem>

            <Text style={style.errorTextStyle}>
              {this.state.error}
            </Text>

          </Card>
        );

      default:
        return (
          <Card>
            <CardItem>
              <Spinner
                style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center' }}
              />
            </CardItem>
          </Card>
        );
    }
  }

  // Render button or the spinner
  renderButton() {
    if (this.state.loading) {
      return <Spinner style={{ alignSelf: 'center' }} />;
    }
    return (
      <Button
        block
        title="Log In"
        onPress={this.handleClick.bind(this)}
      >
        Log In
      </Button>
    );
  }

  render() {
    return this.renderContent();
  }
}

const style = {
  errorTextStyle: {
    marginTop: 15,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Signin;
