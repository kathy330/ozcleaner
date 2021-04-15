/* eslint-disable */
import React, { useEffect } from "react"
import OrderDetailComponent from '../../components/OrderComponents/OrderDetailComponent'
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderRequest } from "../../store/actions"
import Footer from '../../components/FooterComponents/Footer'
import Header from '../../components/NavBarComponents/NavBar'



function OrderDetailsPage(match) {

  const objid = match.match.params.id;
  const query = new URLSearchParams(match.location.search)
  const getType = query.get('type')
  const data = { _id: objid, type: getType }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrderRequest(data))
  }, [])

  let redux = useSelector(state => state.order)
  let repo = redux.order.result[0]
  let loading = redux.loading
  
  return (
    <>
      {(loading) && (<LoadingIcon />)}
      {(!loading) && repo && <>
        {(localStorage.getItem("authLevel") == "employee" || localStorage.getItem("authLevel") == "user") && <Header />}
        <OrderDetailComponent data={repo}/>
        {(localStorage.getItem("authLevel") == "employee" || localStorage.getItem("authLevel") == "user") && <Footer /> }
      </>}
    </>
  )
}

export default OrderDetailsPage


