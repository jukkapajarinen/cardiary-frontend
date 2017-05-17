import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Cardiary</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <li role="presentation"><NavLink to="/">Home</NavLink></li>
          <li role="presentation"><NavLink to="/refuels">Refuels</NavLink></li>
          <li role="presentation"><NavLink to="/addrefuel">Add Refuel</NavLink></li>
          <li role="presentation"><NavLink to="/about">About</NavLink></li>
          <li role="presentation"><NavLink to="/settings">Settings</NavLink></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
