import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../actions/types";

const initialState = {
  items: [],
  filtedItems: [],
  size: '',
  sort: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log(action);
      return {...state, items: action.payload, filtedItems: action.payload};
    case FILTER_PRODUCTS_BY_SIZE:
      console.log(action);
      return {...state, size: action.payload.size, filtedItems: action.payload.items};
    case ORDER_PRODUCTS_BY_PRICE:
      console.log(action);
      return {...state, sort: action.payload.sort, filtedItems: action.payload.items};
    default:
      return state;
  } 
}