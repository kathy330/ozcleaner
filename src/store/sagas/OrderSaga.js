/* eslint-disable no-nested-ternary */
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import header from "./header"

const postRCApi = 'http://localhost:8000/regular'
const postECApi = 'http://localhost:8000/endOfLease/'

function* getOrder(action) {
  try {
    const { _id, type } = action.payload
    const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
    const getApi = `http://localhost:8000/${model}/${_id}`
    const data = yield call(axios.get, getApi,header())
    yield put({ type: 'GET_ORDER_SUCCESS', repos: data.data })
  } catch (e) {
    console.log(e)
    yield put({ type: 'GET_ORDER_FAILED', payload: e })
  }
}

function* updateOrder(action) {
  const { id, update, type, cancelByAdmin } = action.payload
  console.log(id, update, type, cancelByAdmin)
  const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
  // eslint-disable-next-line no-nested-ternary
  const level = localStorage.getItem('authLevel') 
  const {ID,objectID} = JSON.parse(localStorage.getItem(`${level}Info`)).data
  const field = update.reviewStatus? '/comments': cancelByAdmin ?
   '/cancel':update.status==='confirmed'?'/assign':''
  console.log(field)
  const updateApi = `http://localhost:8000/${model}${field}/${id}`  // PUT方法更新regular
  console.log(updateApi)
  try {
    yield call(axios.put, updateApi, {...update, employeeID:ID, employeeDetail:objectID},header())
    yield put({ type: 'UPDATE_ORDER_SUCCESS', repos: update })
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'UPDATE_ORDER_FAILED', payload: e })
  }
}

function* postOrder(action) {
  let postApi = postRCApi
  if (action.payload.type === "EC") {
    postApi = postECApi
  }
  const result = yield call(axios.post, postApi, action.payload, header())
  const { data } = result
  if (result.errors) {
    yield put({ type: 'POST_ORDER_FAILED', errorInSaga: result.errors })
  }
  else {
    yield put({ type: 'POST_ORDER_SUCCESS', postInSaga: data })
    localStorage.setItem('Order', JSON.stringify(action.payload))

  }
}

function* payOrder() {
  yield put({ type: 'PAY_ORDER_SUCCESS', postInSaga: 'success!!' })
}

function* fetchAllOrders(action) {
  try {
    const { page, pageSize, status } = action.payload
    // eslint-disable-next-line max-len
    const apiUrl = `http://localhost:8000/sortedOrder?page=${page}&pageSize=${pageSize}&status=${status}`
    const orders = yield call(axios.get, apiUrl,header())
    yield put({ type: 'GET_ALL_ORDERS_SUCCESS', orders: orders.data })
  } catch (e) {
    yield put({ type: 'GET_ALL_ORDERS_FAILED', message: e.message })
  }
}


function* assignToEmployee(action) {
  const { type,id, update} = action.payload
  const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
  const level = localStorage.getItem('authLevel') 
  const info = JSON.parse(localStorage.getItem(`${level}Info`))
  const {ID,objectID} = info.data
  const updateAPI=`http://localhost:8000/${model}/assign/${id}`
  const EmployeeData = {employeeID:ID,employeeDetail:objectID}
console.log(info)
console.log(EmployeeData)
  try{
    const data = yield call(axios.put, updateAPI ,EmployeeData,header())
    console.log(data)
    yield put({type:'UPDATE_ASSIGN_SUCCESS',payload:data})
    yield put({ type: 'UPDATE_ORDER_SUCCESS', repos: update })
  }
  catch(e) {
    console.log(e)
    yield put({type:'UPDATE_ASSIGN_FAILED',payload:e})
  }
}

function* fetchOrdersByTarget(action) {
  try{
    const{id, type} = action.payload
    const apiUrl = `http://localhost:8000/${type === 'user'? 'users': 'employees'}/alltask/${id}`
    const users = yield call(axios.get, apiUrl,header())
    yield put({type:'GET_ORDERSBYTARGET_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_ORDERSBYTARGET_FAILED',message:e.message})
  }
}


function* OrderSaga() {
  yield takeEvery('GET_ORDER_REQUEST', getOrder) 
  yield takeEvery('POST_ORDER_REQUEST', postOrder) 
  yield takeEvery('UPDATE_ORDER_REQUEST', updateOrder) 
  yield takeEvery('UPDATE_ASSIGN_REQUEST', assignToEmployee)
  yield takeEvery('GET_ALL_ORDERS_REQUESTED', fetchAllOrders )
  yield takeEvery('PAY_ORDER_REQUEST', payOrder) 
  yield takeEvery('GET_ORDERSBYTARGET_REQUEST',fetchOrdersByTarget)
}

export default OrderSaga

