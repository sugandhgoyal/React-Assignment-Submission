import React from 'react';
import '../assets/css/navbar.css';
import {Navbar,NavDropdown,NavItem,MenuItem,Nav} from 'react-bootstrap';

class Navigationbar extends React.Component {
    render() {
        return (
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home" id="title">Green-deck</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    Blog
                </NavItem>
                <NavItem>
                    Developers
                </NavItem>
                <NavItem>
                    Signin
                </NavItem>
                <NavItem>
                    <input type="text"/>
                </NavItem>
            </Nav>
        </Navbar>)
    }
}

export default Navigationbar;