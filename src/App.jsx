import {useEffect} from 'react'
import s from './App.module.scss'
import Header from "./Header/Header.jsx";
import useTelegram from "./hooks/useTelegram.js";
import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList/ProductList.jsx";
import Form from "./Form/Form.jsx";

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])


  return (
    <div className={s.app}>
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path="form" element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
