import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { load_product } from '../../requests/product_descr';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';
import style from './index.module.css'

export default function ProductDescrPage() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product_item);

  const { id } = useParams();

  const add_to_cart = () => dispatch(addToCart({ id: +id, title, image, price }))

  useEffect(() => {
    dispatch(load_product(id))
  }, []);

  const { title, description, price, image } = product;

  return (
    <div className={style.product_descr}>
      {
        image && <img src={image} alt={title} /> 
      }
      <div className={style.info_block}>
        <p className={style.title}>{ title }</p>
        <p className={style.descr}>{ description }</p>
        <div className={style.price_block}>
          <p className={style.price}>
            <span>Price:</span> { price }$
          </p>
          <button onClick={add_to_cart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}