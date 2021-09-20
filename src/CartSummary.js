import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink,
    NavItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
 

class CartSummary extends Component {

    renderFilledCart() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret className="nav__item" >
                        Cart ( {this.props.cart.length} )
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}
                                    <span className="btn btn-secondary rounded-pill btn-sm ml-5 text-right nav__item" > {cartItem.quantity}</span>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="cart" className="btn warning nav__item" color= "warning">Go to Cart</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }

    renderEmptyChart() {
        return (
            <NavItem>
                <NavLink className="nav__item">
                    Empty Cart
                </NavLink>
            </NavItem>
        );
    }
    render() {
        return (
            <div>{this.props.cart.length > 0 ? this.renderFilledCart(): this.renderEmptyChart()}</div>
        );
    }
}

export default CartSummary;