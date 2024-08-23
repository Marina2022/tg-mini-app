import s from './ProductList.module.scss';

import useTelegram from "../hooks/useTelegram.js";
import Button from "../Button/Button.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import {useCallback, useEffect, useState} from "react";
import axios from "axios"; 
const ProductList = () => {

  const {onToggleButton} = useTelegram()

  const products = [
    {
      id: 0,
      title: 'Куртка',
      description: 'Хорошая куртка',
      price: 65400,
    },
    {
      id: 1,
      title: 'Куртка',
      description: 'Хорошая куртка',
      price: 5000,
    }, {
      id: 2,
      title: 'Куртка2',
      description: 'Хорошая куртка',
      price: 600,
    }, {
      id: 3,
      title: 'Куртка3',
      description: 'Хорошая куртка',
      price: 10000,
    }, {
      id: 4,
      title: 'Куртка4',
      description: 'Хорошая куртка',
      price: 1000,
    }, {
      id: 5,
      title: 'Куртка5',
      description: 'Хорошая куртка',
      price: 5000,
    }, {
      id: 6,
      title: 'Куртка6',
      description: 'Хорошая куртка',
      price: 40000,
    }, {
      id: 7,
      title: 'Куртка7',
      description: 'Хорошая куртка',
      price: 6000,
    }
  ]
  
  const [addedItems, setAddedItems] = useState([])
  
  const {tg, query_id} = useTelegram()

  console.log('query_id = ', query_id)
    
  useEffect(()=>{
    tg.MainButton.setParams({text: `Товары: ${addedItems.length}шт`})
    
    if (addedItems.length > 0) {
      tg.MainButton.show()
    } else {
      tg.MainButton.hide()
    }
    
  },[addedItems])

  const mainBtnClickHandler = useCallback(() => {
    const data = {products, query_id, username: tg.initDataUnsafe?.user?.username}
    axios.post('https://mardevcodd.ru:8000/cart', {data})
  }, [products, tg])


  useEffect(() => {
    tg.onEvent('mainButtonClicked', mainBtnClickHandler);

    return () => {
      tg.offEvent('mainButtonClicked', mainBtnClickHandler);
    };
  }, [mainBtnClickHandler, tg]);

  const onAdd = (product)=>{
    
    const alreadyAdded = addedItems.find(item=>item.id === product.id)
    
    let newItems = [] 
    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product] 
    }
    
    setAddedItems(newItems)
  }

    
  return (
    <div>            
      <Button className={s.btn} onClick={onToggleButton}>toggle</Button>
      
      <ul className={s.list}>
        {
          products.map(product=> <ProductItem key={product.id} product={product} onAdd={onAdd} />)
        }       
        
      </ul>
    </div>
  );
};

export default ProductList;