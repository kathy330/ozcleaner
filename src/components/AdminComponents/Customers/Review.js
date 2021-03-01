import React from 'react'
import style from '../scss/Admin.module.scss'

export default function Review() {
  return (
    <div>
      <hr className={style.hrs} />
      <div>
        Review from Customer
      </div>
      <div>
        5.0 ⭐⭐⭐⭐⭐
      </div>
      <div>
        Review Message
      </div>
    </div>
  )
}
