/* eslint-disable */
import React from 'react'
import {
  Typography,
} from '@material-ui/core'

const OrderDetail = (props) => {
  const { id, type } = props
  return (
    <>
      <Typography variant="subtitle2" component="h3" className="text-capitalize">
        ObjectID: 
        {id}
      </Typography>
      <Typography variant="subtitle2" component="h3" className="text-capitalize">
        Type:
        {type}
      </Typography>
    </>
  )
}

export default OrderDetail