import ReactDOM from 'react-dom';
import { portalElement } from '../../helpers/portal';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Backdrop = (): JSX.Element => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100vh] z-20 bg-[rgba(0,0,0,0.75)]'></div>
  );
};

const ModalOverlay = ({ children }: Props): JSX.Element => {
  return (
    <div className='fixed top-[30vh] w-2/6 left-[25vw] md:w-2/6 md:left-[33vw] max-w-[80vw] bg-white p-4 rounded-xl drop-shadow z-30 modal-animation'>
      {children}
    </div>
  );
};

const Modal = ({ children }: Props): JSX.Element => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
