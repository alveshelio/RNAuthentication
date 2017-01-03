import React, { Component } from 'react';
import { Card, CardItem, Button, List, ListItem, InputGroup, Input, Icon } from 'native-base';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'Key0',
      results: []
    };
  }

  render() {
    return (
      <Card>
        <CardItem>
          <List>
            <ListItem>
              <InputGroup>
                <Input inlineLabel label="First Name" placeholder="John" />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Input inlineLabel label="Last Name" placeholder="Doe" />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input placeholder="EMAIL" />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
            </ListItem>
          </List>
        </CardItem>

        <CardItem>
          <Button block>
            Create Account
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
