import Context from './Context';
import { useEffect, useReducer } from 'react';
import  reducer from './reducers';
import axios from 'axios';

function Provider({ children }) {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://52.253.98.98:8080/api/all_products',
      data: {},
    }).then((response) => {
      initState.products = [...response.data];
      initState.productsRender = [...response.data];
    });
  }, []);
  const initState = {
    products: [],
    productsRender: [],
    condition: {
      color: '',
      sortby: '',
      brand: '',
    },
  };

  const [state, dispatch] = useReducer(reducer, initState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}
export default Provider;
