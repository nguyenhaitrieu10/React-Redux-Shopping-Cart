import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
import Filter from './components/Filter';
import Basket from './components/Basket';
import {Provider} from "react-redux"
import store from "./store"

class App extends Component {

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(item => item.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {cartItems: cartItems};
    });
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      let check = false;
      const cartItems = state.cartItems;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          check = true;
          item.count += 1;
        }
      });
      if (!check) {
        cartItems.push({...product, count: 1})
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {cartItems: cartItems};
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr/>
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr/>
              <Products/>
            </div>
            <div className="col-md-3">
              <Basket 
                handleAddToCart={this.handleAddToCart}
                handleRemoveFromCart={this.handleRemoveFromCart}/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
