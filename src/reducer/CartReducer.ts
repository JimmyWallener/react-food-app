type cartState = {
  items: any[];
  totalAmount: number;
};

export const defaultCartState: cartState = {
  items: [],
  totalAmount: 0,
};

interface ADD_ITEM {
  type: 'ADD_ITEM';
  item: {
    id?: string;
    name?: string;
    amount?: number;
    price?: number;
  };
}

interface REMOVE_ITEM {
  type: 'REMOVE_ITEM';
  id: string;
}

export const cartReducer = (
  state: cartState,
  action: ADD_ITEM | REMOVE_ITEM
): cartState => {
  if (action.type === 'ADD_ITEM') {
    console.log(action.item);
    const updatedItemList = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + +action.item.price! * +action.item.amount!;
    return {
      items: updatedItemList,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
