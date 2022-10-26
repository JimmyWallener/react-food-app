import React, { ForwardedRef } from 'react';

type InputType = {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
};

const Input = React.forwardRef(
  (
    { label, ...input }: { label: string; input: InputType },
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className='flex items-center mr-5'>
        <label htmlFor={input.input.id}>{label}</label>
        <input
          className='text-center border ml-3 border-solid w-32'
          ref={ref}
          id={input.input.id}
          {...input}
        />
      </div>
    );
  }
);

export default Input;
