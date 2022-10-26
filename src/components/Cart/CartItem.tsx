type Props = {
  price: number;
  name: string;
  amount: number;
  onRemove(): void;
  onAdd(): void;
};

const CartItem = ({
  price,
  name,
  amount,
  onAdd,
  onRemove,
}: Props): JSX.Element => {
  return (
    <li className='flex w-full justify-between items-center pt-4 mt-4 border-b-2 border-solid border-[#8a2b06]'>
      <div className='flex flex-col justify-between w-full mb-4'>
        <h2 className='text-[#363636] pb-4'>{name}</h2>
        <div className='flex w-full justify-between items-center'>
          <div>
            <span className='mr-10 font-bold text-[#8a2b06]'>
              ${price.toFixed(2)}
            </span>
            <span className='font-bold border border-solid border-[#ccc] pt-1 pr-3 rounded-md text-[#363636]'>
              x{amount}
            </span>
          </div>
          <div className='flex flex-col md:flex-row'>
            <button
              className='font-bold text-sm text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md cursor-pointer bg-transparent ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white'
              onClick={() => onRemove()}
            >
              -
            </button>
            <button
              className='font-bold text-sm text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md cursor-pointer bg-transparent ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white'
              onClick={() => onAdd()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
