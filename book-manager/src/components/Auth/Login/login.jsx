import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import './login.sass';
import '../../../styles.sass';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';

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
    localStorage.setItem('authenticated', true);
    this.props.history.push('/');
  };

  render() {
    const imageSrc = 'https://s4827.pcdn.co/wp-content/uploads/2013/08/iBooks-for-Mac-Thumb.png';
    const re =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const { email, password, disableForm } = this.state;
    const disabledLogin = !(email.length && password.length && re.test(email));
    
    localStorage.setItem('imageSrc', imageSrc);

    return (
      <div className="container">
        <div className="login-form">
          <div className="login-img">
            <img className='login-image' src={localStorage.getItem('imageSrc')}/>
          </div>
          <div className="login-inputs">
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
                type="email"
                value={email}
                disabled={disableForm}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'Email is not valid']}
                required
              />
              <TextValidator
                className='password-validator'
                name="password"
                value={password}
                label="Password"
                type="password"
                disabled={disableForm}
                onChange={this.handleChange('password')}
                validators={['required']}
                errorMessages={['This field is required']}
                required
              />
              <input color="primary"
                     className={`buttonLogin${disabledLogin ? ' disabled' : ''}`}
                     disabled={disabledLogin || disableForm}
                     type="submit"
                     value="LOGIN"
              />
            </ValidatorForm>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);