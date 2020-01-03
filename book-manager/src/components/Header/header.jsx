import React, { Component } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, LinearProgress } from '@material-ui/core';


import HeaderMenu from '../../components/HeaderMenu/header-menu';
// import makeRequest from '../../services/dataService';
import './header.sass';

import NewsFeed from '../Dashboard/NewsFeed/news-feed'

const colorScheme = createMuiTheme({
  palette: {
    primary: { main: '#fff' },
    secondary: {
      light: '#e3e000',
      main: '#f6f6f7',
      dark: '#0f738a'
    }
  },
  typography: {
    useNextVariants: true
  }
});

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      visibilityLoader: 'visible',
    };
  }

  componentDidMount() {
    // this.getUser();
  }

//   getUser = async () => {
//     let userDetails;

//     if (!localStorage.getItem('userProfile')) {
//       userDetails = await makeRequest('userDetails');
//       localStorage.setItem('userProfile', JSON.stringify(userDetails));
//     } else {
//       userDetails = JSON.parse(localStorage.getItem('userProfile'));
//     }

//     this.setState({ userData: Object.assign({}, userDetails) });
//   }

  render() {
    return (
      <MuiThemeProvider theme={colorScheme}>
        <div className="eon-line-top">
          <div className="eon-line first-line"></div>
          <div className="eon-line second-line"></div>
          <div className="eon-line third-line"></div>
        </div>
        <div>
          <AppBar position="static">
            <Toolbar className="toolbar">
              <div>
                <Link to="/">
                  {/* <img src={eon} alt="Eon" height="45" className="img-logo" /> */}
                </Link>
              </div>
              <div className="profile-card">
                <Typography variant="h5" color="inherit" className="eon-title eon-red">
                  Hello
                </Typography>
                <HeaderMenu userData={this.state.userData} />
              </div>
            </Toolbar>
          </AppBar>
          <LinearProgress style={{ visibility: this.state.visibilityLoader }} />
        </div>
        <Route exact path={`${this.props.match.path}`} component={NewsFeed} />
      </MuiThemeProvider>
    )
  }
}

export default withRouter(Header);