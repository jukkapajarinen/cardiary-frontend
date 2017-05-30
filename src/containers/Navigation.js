import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
import {logout as LogoutAction} from '../actions/SessionActions';

class Navigation extends Component{
  constructor(props) {
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
            <NavDropdown eventKey={ 6 } title={<span><Glyphicon glyph='user' /> {this.props.Session.username}</span>} id="userDropdown">
              <LinkContainer to="/profile"><NavItem eventKey={ 6.1 }>Profile</NavItem></LinkContainer>
              <NavItem eventKey={ 6.2 } onSelect={ this.handleLogout }>Logout</NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Session: state.Session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutAction: (username) => {
      dispatch(LogoutAction(username));
    }
  };
};

Navigation.propTypes = {
  Session: PropTypes.object.isRequired,
  LogoutAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);