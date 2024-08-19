import {useEffect} from 'react'
import s from './App.module.scss'
import Header from "./Header/Header.jsx";

function App() {

  const tg = window.Telegram.WebApp
  
  
  
  useEffect(()=>{
    tg.ready()
  }, [])


  return (
    <div className={s.main}>
      <Header />
      <p>
        Я пишу код для телеги, урааа!
      </p>
      
      <div>
        {}
      </div>
      
    </div>
  )
}

export default App
