import pic from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onOpenCart }: { onOpenCart: any }): JSX.Element => {
  return (
    <>
      <header className='flex bg-red-900 w-full justify-between items-center drop-shadow fixed h-20 z-10'>
        <h1 className='text-2xl text-white pl-[10%] font-bold'>React Meals</h1>
        <HeaderCartButton onOpenCart={onOpenCart} />
      </header>
      <div className='w-[110%] h-96 z-0 overflow-hidden'>
        <img
          src={pic}
          alt='table filled with food'
          className='h-full object-cover w-full image-transform'
        />
      </div>
    </>
  );
};

export default Header;
