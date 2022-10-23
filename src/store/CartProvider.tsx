import { useReducer } from 'react';
import { cartReducer, defaultCartState } from '../reducer/CartReducer';
import CartContext from './cart-context';

type cartChildren = {
  children: JSX.Element | JSX.Element[] | boolean;
};

const CartProvider = ({ children }: cartChildren): JSX.Element => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: {}): void => {
    dispatch({ type: 'ADD_ITEM', item: item });
  };
  const removeItemFromCartHandler = (id: string): void => {
    dispatch({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
