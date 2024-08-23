import s from './ProductItem.module.scss';
import Button from "../../Button/Button.jsx";

const ProductItem = ({product, onAdd}) => {


  return (
    <div className={s.item}>
      <div className={s.image}></div>
      <h3>{product.title}</h3>
      <p className={s.desc}>{product.description}</p>
      <p className={s.price}>{product.price}</p>
      <Button onClick={() => onAdd(product)}>Добавить</Button>

    </div>
  )
}

export default ProductItem;