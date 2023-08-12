import { SORT_LOW_TO_HIGHT, SORT_HIGHT_TO_LOW, SORT_PRODUCTS_NAME, SEARCH_PRODUCTS } from './constants';

function reducer(state, action) {
  switch (action.type) {
    case SORT_LOW_TO_HIGHT:
      var updateProducts = [...state.products];
      updateProducts = updateProducts.sort((a, b) => b.price * 1 - a.price * 1);
      return {
        ...state,
        productsRender: updateProducts,
      };
    case SORT_HIGHT_TO_LOW:
      var updateProducts2 = [...state.products];
      updateProducts2 = updateProducts2.sort((a, b) => a.price * 1 - b.price * 1);
      return {
        ...state,
        productsRender: updateProducts2,
      };
    case SORT_PRODUCTS_NAME:
      var updateProducts3 = [...state.products];
      updateProducts3 = updateProducts3.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        productsRender: updateProducts3,
      };
    case SEARCH_PRODUCTS:
      var updateProducts4 = [...state.products];
      updateProducts4 = updateProducts4.filter((items) =>
        JSON.stringify(items).toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        productsRender: updateProducts4,
      };
    default:
      throw new Error('Invailt error');
  }
}

export default reducer;
