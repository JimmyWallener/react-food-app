import Modal from '../UI/Modal';

const Cart = ({ onCloseCart }: { onCloseCart: any }): JSX.Element => {
  const cartItems = (
    <ul className='list-none flex justify-between m-0 p-0 max-h-80 overflow-auto'>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
        (item: {
          id: string;
          name: string;
          amount: number;
          price: number;
        }): JSX.Element => (
          <>
            <li>{item.name}</li>
            <li>{item.price}</li>
          </>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className='flex justify-between items-center font-bold text-2xl mt-4 ml-0'>
        <span>Total Amount</span>
        <span>35.66</span>
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
        <button className='bg-[#8a2b06] text-white cursor-pointer bg-transparent border border-solid border-[#8a2b06] pl-4 pr-4 rounded-3xl ml-4 hover:bg-[#5a1a01] active:bg-[#5a1a01] hover:border-[#5a1a01] active:border-[#5a1a01] hover:text-white active:text-white'>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
