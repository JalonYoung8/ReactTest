import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCTS,
  EMPTY_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './types';

export default function productReducer(state, { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      return { ...state, products: payload };
    }

    case ADD_PRODUCT_TO_CART: {
      const { cart } = state;
      cart.push(payload);

      return { ...state, cart };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { cart } = state;
      const productToRemoveIndex = cart.findIndex(
        (product) => product.id === payload
      );

      cart.splice(productToRemoveIndex, 1);

      return { ...state, cart };
    }

    case EMPTY_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
}
