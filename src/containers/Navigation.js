import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LogoutAction} from '../actions/LoginActions';

class Navigation extends Component{
  constructor(props) {
    console.log('Navigation::constructor');
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('jwt_token');
    this.props.LogoutAction();
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/home"><a>Cardiary</a></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/home"><NavItem eventKey={ 1 }>Home</NavItem></LinkContainer>
            <LinkContainer to="/refuels"><NavItem eventKey={ 2 }>Refuels</NavItem></LinkContainer>
            <LinkContainer to="/addrefuel"><NavItem eventKey={ 3 }>Add Refuel</NavItem></LinkContainer>
            <LinkContainer to="/about"><NavItem eventKey={ 4 }>About</NavItem></LinkContainer>
            <LinkContainer to="/settings"><NavItem eventKey={ 5 }>Settings</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem onSelect={ this.handleLogout }>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutAction: (username) => {
      dispatch(LogoutAction(username));
    }
  };
};

Navigation.propTypes = {
  LogoutAction: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Navigation);