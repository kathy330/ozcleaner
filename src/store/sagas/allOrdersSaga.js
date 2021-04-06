import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* fetchAllOrders(action) {
  try {
    const { page, pageSize, status } = action.payload
    // eslint-disable-next-line max-len
    const apiUrl = `http://localhost:8000/sortedOrder?page=${page}&pageSize=${pageSize}&status=${status}`
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