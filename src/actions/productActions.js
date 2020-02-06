import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "./types";
import {increasePrice, decreasePrice, increaseId} from "../util"

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(products => {
      console.log(products)
      return dispatch({type: FETCH_PRODUCTS, payload: products});
    });
}

export const filterProducts = (products, size) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE, 
    payload: {
      size: size,
      items: size === '' ? products : products.filter(p => p.availableSizes.indexOf(size.toUpperCase()) >= 0)
    }
  });
}

export const sortProducts = (products, sort) => (dispatch) => {
  if (sort !== "") {
    if (sort === "lowestprice") {
      console.log(1)
      products.sort(increasePrice);
    }
    else if (sort === "highestprice") {
      console.log(2)
      products.sort(decreasePrice);
    }
  }
  else {
    console.log(3)
    products.sort(increaseId);
  }

  const product2 = [...products]

  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE, 
    payload: {
      sort: sort,
      items: product2
    }
  });
}
