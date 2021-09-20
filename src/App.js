import React, { Component } from 'react';
import CategoryList from "./CategoryList";
import Navigator from "./Navigator";
import ProductList from "./ProductList";
import { Container, Row, Col } from "react-bootstrap";
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import CartList from './CartList';
import NotFound from './NotFound';
import UserForm from './UserForm';

class IntroApp extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount = () => {
    this.getProducts()
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  };

  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem)
      addedItem.quantity += 1;
    else
      newCart.push({ product: product, quantity: 1 })

    this.setState({ cart: newCart })
    alertify.success(product.productName + " added to cart!", 2)

  };

  removeFromCart = (cartItem) => {
    let newCart = this.state.cart
    if (cartItem.quantity > 1)
      cartItem.quantity--;
    else
      newCart = this.state.cart.filter(c => c.product.id !== cartItem.product.id)

    this.setState({ cart: newCart })
    alertify.error(cartItem.product.productName + " dropped from the cart", 2)

  };

  render() {
    let categoryList_info = { title: "Category List", shortDescription: "Product categories' list" }
    let productList_info = { title: "Product List", shortDescription: "All products' list" }

    return (
      <div>
        <Navigator cart={this.state.cart} />

        <Container className="container">
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryList_info}></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <ProductList
                    {...props}  // Packages the props and sends to render.                    
                    products={this.state.products} info={productList_info}
                    currentCategory={this.state.currentCategory} addToCart={this.addToCart}>
                  </ProductList>
                )} />
                <Route path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}>
                  </CartList>
                )} />
                <Route path="/userform" component={UserForm} ></Route>

                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default IntroApp;
