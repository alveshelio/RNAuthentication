import React, { Component } from 'react';
import { Card, CardItem, Button, List, ListItem, InputGroup, Input, Icon } from 'native-base';

class Signin extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardItem>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input
                  placeholder="EMAIL"
                  value={this.state.text}
                  onChangeText={text => this.setState({ text })}
                />
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
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default Signin;
