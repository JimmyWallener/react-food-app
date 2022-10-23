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
      <div>
        <label htmlFor={input.input.id}>{label}</label>
        <input ref={ref} id={input.input.id} {...input} />
      </div>
    );
  }
);

export default Input;
