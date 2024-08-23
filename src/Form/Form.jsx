import s from './Form.module.scss';
import {useCallback, useEffect, useState} from "react";
import useTelegram from "../hooks/useTelegram.js";
import {Link} from "react-router-dom";

const Form = () => {

  const {tg} = useTelegram()

  const [city, setCity] = useState('gaaga')
  const [country, setCountry] = useState('')
  const [sex, setSex] = useState('')
 
  useEffect(() => {
    tg.MainButton.setParams({text: 'Отправить'})
  }, []);

  useEffect(() => {
    if (!city || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }                   
  }, [city, country]);

  const mainBtnClickHandler = useCallback(() => {
    tg.sendData(JSON.stringify({city, country, sex}))    
  }, [city, country, sex, tg])

  
  useEffect(() => {
    tg.onEvent('mainButtonClicked', mainBtnClickHandler);

    return () => {
      tg.offEvent('mainButtonClicked', mainBtnClickHandler);
    };
  }, [mainBtnClickHandler, tg]);
  
  const onCityChange = (e) => {
    setCity(e.target.value)
  }
    
  return (
    <form className={s.form}>
      <input value={city} onChange={onCityChange} className={s.control} type="text"
             placeholder="Город"/>
      <input value={country} onChange={(e) => setCountry(e.target.value)} className={s.control} type="text"
             placeholder="Страна"/>
      <select value={sex} onChange={(e) => setSex(e.target.value)} className={s.control}>
        <option value="1">Мужик</option>
        ion
        <option value="2">Девочка</option>ion
      </select>

      <p>
        <Link to="/">link</Link>
      </p>
      
      <div>
                
      </div>

    </form>
  );
};

export default Form;