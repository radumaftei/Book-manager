import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import './login.sass';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class Login extends Component {

  state = {
    email: '',
    password: '',
    disableForm: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    // your submit logic
  };

  setToLocalStorage = (image, imageSrc) => {
    localStorage.setItem(image, imageSrc);
  };

  getFromLocalStorage = item => {
    console.log(localStorage.getItem('imageSrc'));
    return localStorage.getItem(item);
  };

  render() {
    const { email, password } = this.state;
    const disabledLogin = !(email.length && password.length);
    const imageSrc = 'https://www.w3schools.com/howto/img_avatar2.png';
    this.setToLocalStorage('imageSrc', imageSrc);

    return (
      <div className="container">
        <div className="login-form">
            <img className='login-image' src={this.getFromLocalStorage('imageSrc')}/>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
            className='form-login'
          >
            <TextValidator
              className='email-validator'
              label="Email"
              onChange={this.handleChange('email')}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'Email is not valid']}
            />
            <TextValidator
              className='password-validator'
              name="password"
              value={password}
              label="Password"
              type="password"
              disabled={this.state.disableForm}
              onChange={this.handleChange('password')}
              validators={['required', 'isEmpty']}
              errorMessages={['This field is required', 'Password cannot be empty']}
              required
            />
            <Button type="submit" disabled={disabledLogin}>Login</Button>
          </ValidatorForm>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);