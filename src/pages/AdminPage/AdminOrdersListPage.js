/* eslint-disable*/
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OrdersLists from '../../components/AdminComponents/Orders/OrdersList'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1px',
    padding: '11px 15px',
    [theme.breakpoints.down('xs')]: {
      padding: '25px 10px',
    },
  }
}))

const AdminOrdersListPage = (match) => {
  const classes = useStyles()
  const query = new URLSearchParams(match.location.search)
  const page = parseInt(query.get('page') || '1', 10)
  const status = (query.get('status') || '')

  return (
    <Container maxWidth="lg" className={classes.root}>
      <OrdersLists pageSize={7} urlPage={page} status={status}/>
    </Container>
  )
}

export default AdminOrdersListPage