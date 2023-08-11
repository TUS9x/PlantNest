import React, { useState, useReducer, useEffect } from "react";
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, UPDATE } from "./reducers";
import axios from 'axios';
function GlobalState(props) {
    const [products, setPosts] = useState([]);
    useEffect(() => {
        axios({
          method: 'get',
          url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
          data: {},
        }).then((response) => {
          setPosts(response.data);
        });
      }, []);

      console.log(products)

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };
  const upDate = productId => {
    dispatch({ type: UPDATE, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        upDate: upDate
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;