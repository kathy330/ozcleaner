import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import OrdersLists from '../../components/AdminComponents/Orders/OrdersList'
import Footer from '../../components/FooterComponents/Footer'
import NavBar from '../../components/NavBarComponents/NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1px',
    padding: '11px 15px',
    [theme.breakpoints.down('xs')]: {
      padding: '25px 10px',
    },
  }
}))

const EmployeeOrderList = (match) => {
  const classes = useStyles()
  const query = new URLSearchParams(match.location.search)
  const page = parseInt(query.get('page') || '1', 10)
  const listType = 'employee'

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={classes.root}>
        <OrdersLists pageSize={7} urlPage={page} status='confirmed' listType={listType} />
      </Container>
      <Footer />
    </>
  )
}

export default EmployeeOrderList