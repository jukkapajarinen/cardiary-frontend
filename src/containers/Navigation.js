import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
import {logout as SessionLogoutAction} from '../actions/SessionActions';

class Navigation extends Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.SessionLogoutAction();
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/"><a>Cardiary</a></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/' }><NavItem eventKey={ 1 }>Home</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/refuels' }><NavItem eventKey={ 2 }>Refuels</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/addrefuel' }><NavItem eventKey={ 3 }>Add Refuel</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/cars' }><NavItem eventKey={ 4 }>Cars</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/addcar' }><NavItem eventKey={ 5 }>Add Car</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/about' }><NavItem eventKey={ 6 }>About</NavItem></LinkContainer>
            <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/settings' }><NavItem eventKey={ 7 }>Settings</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={ 8 } title={ <span><Glyphicon glyph='user' /> {this.props.Profile.username}</span> } id="userDropdown">
              <LinkContainer to={ process.env.REACT_APP_PATH_PREFIX + '/profile' }><NavItem eventKey={ 8.1 }>Profile</NavItem></LinkContainer>
              <NavItem eventKey={ 8.2 } onSelect={ this.handleLogout }>Logout</NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Profile: state.Profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SessionLogoutAction: () => {
      dispatch(SessionLogoutAction());
    }
  };
};

Navigation.propTypes = {
  Profile: PropTypes.object.isRequired,
  SessionLogoutAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
