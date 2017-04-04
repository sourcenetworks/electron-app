import styled from 'styled-components';
import React, { Component, PropTypes} from 'react';
import Button from './Button.jsx';
// import { createKeyAndMnemonic } from '../actions/WalletActions';
// const Source = require('@sourcenetworks/background-lib').default;
import { genKeyLol } from '../utils/walletUtils';

const propTypes = {
  dismiss: PropTypes.func.isRequired,
};
// This is useless because it's being passed down from parent I would need to pass another thing

const H2 = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 1em;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

// Get Jeff to do styling and then we good
// @todo: make sure this box has a shadow or border

const Form = styled.form`
  width: 90%
  padding: 0.5em;
  margin: 0.5em;
  background: white;
`;

// const propTypes = {
//     userNameInput: PropTypes.string,
//     passwordInput: PropTypes.string
// };

export default class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var seed = genKeyLol(this.state.passwordInput);
    console.log("Hello " + seed);
    console.log("This is the username: " + this.state.userNameInput);
    console.log("This is the password: " + this.state.passwordInput);

    // Object promise is not being called correctly ->
    // newMnemonic is passing back a different object
    // than I would have thought

    // Pull up the next screen
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
          <H2>
              Enter a username and password
          </H2>
          <Input
              type="text"
              placeholder="Bob"
              value={this.state.usernameInput}
              onChange={(e) => this.setState({usernameInput: e.target.value})}
          />
          <Input
              type="password"
              placeholder="password"
              value={this.state.passwordInput}
              onChange={(e) => this.setState({passwordInput: e.target.value})}
          />
          <Button>{"Let's go"}</Button>
          { /* @todo: Create New Button Class that actually saves the form field to the data base. */}

      </Form>
    );
  }


}
