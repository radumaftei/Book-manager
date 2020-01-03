import React from 'react';
import { withRouter } from 'react-router-dom';
import FaceIcon from '@material-ui/icons/Face';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import { navigation } from '../../shared/path';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './header-menu.sass';

class HeaderMenu extends React.Component {

  constructor() {
    super()
    this.state = { anchorEl: null }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };

//   goToProfile = () => {
//     this.handleClose();
//     this.props.history.push(navigation.profile);

//   }

  logout = () => {
    window.localStorage.clear();
    this.props.history.push(navigation.login);
  }

  goToDashboard = () => {
    this.handleClose();
    this.props.history.push(navigation.dashboard);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>

          <Menu
            id="top-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.goToDashboard}>Dashboard</MenuItem>

            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Menu>
      </div>
    );
  }
}

export default withRouter(HeaderMenu);