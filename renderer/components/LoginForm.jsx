import styled from 'styled-components';
import React, { Component, PropTypes} from 'react';
import Button from './Button.jsx';
import { getNewMnemonic } from '../utils/walletUtils';

const propTypes = {
  dismiss: PropTypes.func.isRequired
}


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

    console.log("This is the password: " + this.state.passwordInput);

    var litty = getNewMnemonic(this.state.passwordInput);

    console.log("This is the mnemonic string: " + litty);

    dismiss;

    // @Todo: Dismiss -> this function currently lives in the WelcomeSreenContainer
  }

  render () {
    return (
      <Form>
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
          <Button onClick={this.handleSubmit}>{"Let's go"}</Button>
          { /* @todo: Create New Button Class that actually saves the form field to the data base. */}
      </Form>
    );
  }


}
