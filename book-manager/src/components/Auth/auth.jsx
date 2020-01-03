import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

export default function (WrappedComponent) {
  class Authenticated extends Component {

    componentWillMount() {
      if (!localStorage.getItem('authenticated')) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent/>
    }
  }

  return withRouter(Authenticated);
}