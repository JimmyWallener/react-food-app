const Card = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <div className='p-4 shadow-xl rounded-2xl bg-white'>{children}</div>;
};

export default Card;
