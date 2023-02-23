import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {

    const category_up = category[0].toUpperCase() + category.slice(1);
  return (
    <Link className={style.category_card} to={category}>{ category_up }</Link>
  )
}
