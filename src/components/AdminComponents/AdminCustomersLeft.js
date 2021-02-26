import React from 'react'
// import styles from './scss/HomeTitle.module.scss'
import OrderNavBar from './Customers/OrderNavBar'
import OrderTitle from './Customers/OrderTitle'
import UserDetail from './Customers/UserDetail'
import EmployeeDetail from './Customers/EmployeeDetail'
import Location from './Customers/Location'
import DueDate from './Customers/DueDate'
import Extra from './Customers/Extra'
import Review from './Customers/Review'


const AdminCustomersLeft = () => (
  <div>
    <OrderNavBar />
    <OrderTitle />
    <UserDetail />
    <EmployeeDetail />
    <Location />
    <DueDate />
    <Extra />
    <Review />
  </div>
)

export default AdminCustomersLeft