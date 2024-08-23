import s from './Button.module.scss';
const Button = ({onClick, className, children}) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;