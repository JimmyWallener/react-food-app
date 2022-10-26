import { FormEvent, useRef, useState } from 'react';
import Input from '../../UI/Input';

type Props = {
  id: string;
  onAddToCart(e: number): void;
};

const MealItemForm = ({ id, onAddToCart }: Props): JSX.Element => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const amount: string | undefined = amountRef?.current?.value;
    if (amount?.trim().length === 0 || +amount! < 1 || +amount! > 5) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(+amount!);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='flex'>
        <Input
          ref={amountRef}
          label='Amount'
          input={{
            id: `amount_${id}`,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button className='text-right cursor-pointer bg-[#8a2b06] text-white rounded-2xl font-bold border-solid border border-[#8a2b06] p-2'>
          + Add
        </button>
      </div>
      {!isAmountValid && <p>Please enter a valid amount (1-5.</p>}
    </form>
  );
};

export default MealItemForm;
