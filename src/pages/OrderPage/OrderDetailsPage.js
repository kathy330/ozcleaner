/* eslint-disable */
import React, { useEffect } from "react"
import { makeStyles } from '@material-ui/core'
import OrderDetailComponent from '../../components/OrderComponents/OrderDetailComponent'
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderRequest } from "../../store/actions"
import Footer from '../../components/FooterComponents/Footer'
import Header from '../../components/NavBarComponents/NavBar'

// style
const useStyles = makeStyles((theme) => ({
  bg: {
    // [theme.breakpoints.down('sm')]: {
    //   padding: '0px',
    // },
    padding: '70px',
  },
}))

function OrderDetailsPage(match) {
  const classes = useStyles()

  const objid = match.match.params.id;
  const query = new URLSearchParams(match.location.search)
  const getType = query.get('type')
  const data = { _id: objid, type: getType }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrderRequest(data))
  }, [])

  let redux = useSelector(state => state.order)
  let loading = redux.loading
  let repo = redux.order.result[0]
  return (
    <div>
      {(loading) && (<LoadingIcon />)}
      {(!loading) && redux.order.page === "order" && <>
        {(localStorage.getItem("authLevel") == "employee" || localStorage.getItem("authLevel") == "user") && <Header />}
        <OrderDetailComponent data={repo} className={classes.bg} />
        {(localStorage.getItem("authLevel") == "employee" || localStorage.getItem("authLevel") == "user") && <Footer />}
      </>}
    </div>
  )
}

export default OrderDetailsPage


