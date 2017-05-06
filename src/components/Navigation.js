import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Header, Brand, Toggle, Collapse, Nav } from "react-bootstrap";

export const Navigation = (props) =>  {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">App</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <li role="presentation"><NavLink to="/">Home</NavLink></li>
                    <li role="presentation"><NavLink to="/about">About</NavLink></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
