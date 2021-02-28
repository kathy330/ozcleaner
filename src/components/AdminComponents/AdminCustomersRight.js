import React from 'react'
import style from './scss/Admin.module.scss'
import Price from './Customers/Price'
import CancelOrderButton from './Customers/CancelOrderButton'

const AdminCustomersRight = () => (
  <div className={style.right}>
    <Price />
    <CancelOrderButton />
  </div>
)

export default AdminCustomersRight