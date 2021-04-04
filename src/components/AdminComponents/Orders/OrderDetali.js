/* eslint-disable */
import React from 'react'
import {
  Typography,
} from '@material-ui/core'

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

const OrderDetail = (props) => {
  const { id } = props
  return (
    <>
      <Typography variant="subtitle2" component="h3" className="text-capitalize">
        ObjectID: 
        {id}
      </Typography>
    </>
  )
}

export default OrderDetail