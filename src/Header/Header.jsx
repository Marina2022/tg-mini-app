import s from './Header.module.scss';
import useTelegram from "../hooks/useTelegram.js";
import Button from "../Button/Button.jsx";

const Header = () => {

  const {tg, close} = useTelegram()
  
  return (
    <header className={s.header}>

      {
        tg.initDataUnsafe?.user?.username && <div className={s.colored}>
          Привет, {tg.initDataUnsafe?.user?.username}!
        </div>
      }

      <Button onClick={close}>
        Close
      </Button>
    </header>
  );
};

export default Header;