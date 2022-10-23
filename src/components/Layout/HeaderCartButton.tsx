import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

interface openCart {
  onOpenCart: () => void;
}

const HeaderCartButton = ({ onOpenCart }: openCart): JSX.Element => {
  const ctx = useContext(CartContext);

  const itemsInCart = ctx.items.reduce((curValue: any, item: any): number => {
    return curValue + item.amount;
  }, 0);

  return (
    <>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault();
          onOpenCart();
        }}
        className='flex justify-around items-center font-bold border-none font-inherit hover:bg-[#2c0d00] active:bg-[#2c0d00] mr-[20%] pl-10 pr-10 p-3 rounded-3xl cursor-pointer  text-white bg-[#4d1601]'
      >
        <span className='w-5 h-5 mr-2'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='bg-red-700 hover:bg-[#92320c] active:bg-[#92320c] p-3 py-0 rounded-3xl ml-4 font-bold'>
          {itemsInCart}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
