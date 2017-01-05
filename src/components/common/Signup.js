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

class LoginForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: '',
    success: '',
    loading: false
  };

  onCreateAccountSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      success: 'Your account has been created\nYou can now Log In',
      loading: false
    });
  }

  onCreateAccountFail(error) {
    this.setState({ loading: false });

    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      this.setState({ error: 'The password needs to have at least 6 characters' });
    } else {
      this.setState({ error: `Unable to create your account because
        \n${errorCode}
        \n${errorMessage}` });
    }
  }

  handleClick() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onCreateAccountSuccess.bind(this))
      .catch(this.onCreateAccountFail.bind(this));

    firebase.auth().signOut();
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner style={{ alignSelf: 'center' }} />;
    }
    return (
      <Button block onPress={this.handleClick.bind(this)}>
        Create Account
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <List>
            <ListItem>
              <InputGroup>
                <Input
                  inlineLabel label="First Name"
                  placeholder="John"
                  value={this.state.firstname}
                  onChangeText={(firstname) => this.setState({ firstname })}
                />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Input
                  inlineLabel label="Last Name"
                  placeholder="Doe"
                  value={this.state.lastname}
                  onChangeText={(lastname) => this.setState({ lastname })}
                />
              </InputGroup>
            </ListItem>

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
                  placeholder="password"
                  secureTextEntry
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
        <Text style={style.successTextStyle}>
          {this.state.success}
        </Text>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  successTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green'
  }
};

export default LoginForm;
