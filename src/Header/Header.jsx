import s from './Header.module.scss';

const Header = () => {

  const tg = window.Telegram.WebApp
  
  return (
    <header className={s.header}>
      <div className={s.colored}>
        Привет, {tg.initDataUnsafe.user.first_name}        
      </div>
      <button onClick={() => tg.close()} className={s.btn}>
        Close
      </button>
    </header>
  );
};

export default Header;