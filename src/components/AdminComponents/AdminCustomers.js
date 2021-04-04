/* eslint-disable */
import React from 'react'
import Left from './AdminCustomersLeft'
import Right from './AdminCustomersRight'
import { Grid } from '@material-ui/core'
export default function AdminCustomers(props) {
  const { dueDate, orderTitle,
    customerFirstName, customerLastName, location, rate, cab, fri, ov, intWin, reviewText,
    orderStatus, typeOfOrder, phone, orderPrice, ID } = props
  return (
    <Grid container spacing={2}>
      <Left dd={dueDate}
        ot={orderTitle}
        cf={customerFirstName}
        cl={customerLastName}
        lc={location}
        rt={rate}
        cb={cab}
        fr={fri}
        o={ov}
        iw={intWin}
        rv={reviewText}
        os={orderStatus}
        to={typeOfOrder}
        ph={phone}
        id={ID}
      />
      <Right op={orderPrice} os={orderStatus} id={ID} />
    </Grid>
  )
}

