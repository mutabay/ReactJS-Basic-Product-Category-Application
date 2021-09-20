import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navigator extends Component {

    render() {
        return (
            <div className="wrapper site-header__wrapper">
                <Navbar expand="md">
                    <div className="container"> 
                    <NavbarBrand className="mr-5 brand" href="/">React Intro App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse navbar>
                        <Nav className="mx-auto nav" navbar >
                            <NavItem className="nav__wrapper">
                                <NavLink>
                                    <Link to="/userform/" className="nav__item">User Form</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav__wrapper">
                                <CartSummary className="nav__item" cart={this.props.cart} />
                            </NavItem>

                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}