import React from 'react';

interface CartInterface {
  items: any[];
  totalAmount: number;
  addItem(item: {
    id?: string;
    name?: string;
    amount?: number;
    price?: number;
  }): void;
  removeItem(id: string): void;
}

const CartContext = React.createContext<CartInterface>({
  items: [],
  totalAmount: 0,
  addItem: (item: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }): void => {},
  removeItem: (id: string): void => {},
});

export default CartContext;
