/* eslint-disable */
import React, { useEffect } from "react"
import AdminOrderDetailPage from '../../components/OrderComponents/OrderDetailComponent'
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderRequest } from "../../store/actions"



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
      {(!loading) && repo && <AdminOrderDetailPage data={repo}/>}
    </>
  )
}

export default OrderDetailsPage


