import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
// import actionTypes from "../actions/actionTypes"

function * fetchAllOrders(action) {
  try {
    const { page, pageSize } = action.payload
    const apiUrl = `http://localhost:8000/sortedOrder?page=${page}&pageSize=${pageSize}`
    const orders = yield call(axios.get, apiUrl)
    // console.log('data', orders)
    yield put({ type: 'GET_ALL_ORDERS_SUCCESS', orders: orders.data })
  } catch (e) {
    yield put({ type: 'GET_ALL_ORDERS_FAILED', message: e.message })
  }
}

function* AllOrdersSaga() {
  yield takeEvery('GET_ALL_ORDERS_REQUESTED', fetchAllOrders )
}

export default AllOrdersSaga