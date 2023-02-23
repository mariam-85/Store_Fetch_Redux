import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from '../../store/reducers/cart'

export default function CartCard({ id, title, image, price, count }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCount(id));
  const decrement = () => dispatch(decrementCount(id));

  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ price }$ x { count } = { price * count }$</p>
      <div className={style.triggers}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}