import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
const MealItem = ({
  id,
  name,
  desc,
  price,
}: {
  id: string | undefined;
  name: string | undefined;
  desc: string | undefined;
  price: number | undefined;
}): JSX.Element => {
  const ctx = useContext(CartContext);

  const addItemToCartHandler = (amount: number): void => {
    console.log('number', amount);
    ctx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li>
      <div className='flex justify-between m-4 pb-4 border-solid border-b border-b-[#ccc]'>
        <div>
          <h3 className='mb-1'>{name}</h3>
          <div className='italic'>{desc}</div>
          <div className='mt-1 font-bold text-[#ad5502] text-xl '>
            {price!.toFixed(2)}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <MealItemForm id={id!} onAddToCart={addItemToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
