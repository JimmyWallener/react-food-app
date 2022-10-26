import { Fragment, useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = ({ onCloseCart }: { onCloseCart: any }): JSX.Element => {
  const context = useContext(CartContext);
  const cartItemRemoveHandler = (id: any) => {
    context.removeItem(id);
  };
  const cartItemAddHandler = (item: any) => {
    context.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className='list-none flex flex-col  m-0 p-0 max-h-80 overflow-auto'>
      {context.items.map(
        (item: {
          id: string;
          name: string;
          amount: number;
          price: number;
        }): JSX.Element => (
          <Fragment>
            <div className='flex flex-row justify-between'>
              <CartItem
                key={item.id}
                price={item.price}
                name={item.name}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            </div>
          </Fragment>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className='flex justify-between items-center font-bold text-2xl mt-4 ml-0'>
        <span>Total Amount</span>
        <span>${context.totalAmount.toFixed(2)}</span>
      </div>
      <div className='flex justify-end text-[#8a2b06]'>
        <button
          onClick={(
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void => {
            e.preventDefault();
            onCloseCart();
          }}
          className='text-[#8a2b06] cursor-pointer bg-transparent border border-solid border-[#8a2b06] pl-4 pr-4 rounded-3xl hover:bg-[#5a1a01] active:bg-[#5a1a01] hover:border-[#5a1a01] active:border-[#5a1a01] hover:text-white active:text-white'
        >
          Close
        </button>
        {context.items.length > 0 && (
          <button className='bg-[#8a2b06] text-white cursor-pointer bg-transparent border border-solid border-[#8a2b06] pl-4 pr-4 rounded-3xl ml-4 hover:bg-[#5a1a01] active:bg-[#5a1a01] hover:border-[#5a1a01] active:border-[#5a1a01] hover:text-white active:text-white'>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
