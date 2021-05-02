import { useReducer } from 'react';
import { firestore } from '../../firebase/config';
import ProductContext from './';
import productReducer from './productReducer';
import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCTS,
  EMPTY_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './types';

function ProductState({ children }) {
  const initialState = {
    products: null,
    cart: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getAllProducts = async () => {
    const productsRef = firestore.collection('products');
    const productsSnap = await productsRef.get();

    const products = [];

    productsSnap.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));

    dispatch({ type: GET_ALL_PRODUCTS, payload: products });
  };

  const addProduct = async (product) => {
    await firestore.collection('products').add(product);
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: productId });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getAllProducts,
        addProduct,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductState;
