import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App(): JSX.Element {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const cartHandler: React.Dispatch<
    React.SetStateAction<boolean>
  > = (): void => {
    setCartIsShown((curVal: boolean): boolean => !curVal);
  };

  return (
    <CartProvider>
      <Fragment>{cartIsShown && <Cart onCloseCart={cartHandler} />}</Fragment>
      <Header onOpenCart={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
