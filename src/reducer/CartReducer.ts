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
    const updatedTotalAmount =
      state.totalAmount + +action.item.price! * +action.item.amount!;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + +action.item.amount!,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const itemIndex = state.items.findIndex((item) => item.id! === action.id);
    const existingItem = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
