import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import header from "./header"
// const gitApi = 'http://localhost:8000/regular/task/1'
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
  const { id, update, type } = action.payload
  // const update = { status: orderstatus }
  const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
  const updateApi = `http://localhost:8000/${model}/${id}`  // PUT方法更新regular
  try {
    yield call(axios.put, updateApi, update,header())
    yield put({ type: 'UPDATE_ORDER_SUCCESS', repos: update })
    // 这个data是返回对象reponse的data属性
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'UPDATE_ORDER_FAILED', payload: e })
  }
}

// 1/3 post regular order --dongyu
function* postOrder(action) {
  let postApi = postRCApi
  if (action.payload.type === "EC") {
    postApi = postECApi
  }
  const result = yield call(axios.post, postApi, action.payload, header())
  const { data } = result
  // console.log('return from backend: ', data)
  if (result.errors) {
    yield put({ type: 'POST_ORDER_FAILED', errorInSaga: result.errors })
  }
  else {
    yield put({ type: 'POST_ORDER_SUCCESS', postInSaga: data })


    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('Order', JSON.stringify(action.payload))

  }
}

// 3/3 PAY order --dongyu
function* payOrder() {
  yield put({ type: 'PAY_ORDER_SUCCESS', postInSaga: 'success!!' })
}

function* fetchAllOrders(action) {
  try {
    const { page, pageSize, status } = action.payload
    // eslint-disable-next-line max-len
    const apiUrl = `http://localhost:8000/sortedOrder?page=${page}&pageSize=${pageSize}&status=${status}`
    const orders = yield call(axios.get, apiUrl,header())
    // console.log('data', orders)
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

  try{
    const data = yield call(axios.put, updateAPI ,EmployeeData,header())
    // console.log(data)
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
    // console.log(type)
    // console.log(id)
    const apiUrl = `http://localhost:8000/${type === 'user'? 'users': 'employees'}/alltask/${id}`
    // console.log(apiUrl)
    const users = yield call(axios.get, apiUrl,header())
    yield put({type:'GET_ORDERSBYTARGET_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_ORDERSBYTARGET_FAILED',message:e.message})
  }
}


/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* RegularSaga() {
  // yield takeLatest('GET_REGULAR_REQUEST',fetchRegularUrl)
  yield takeEvery('GET_ORDER_REQUEST', getOrder) // GEt 全部 ORDER
  yield takeEvery('POST_ORDER_REQUEST', postOrder) // POST to regular order
  yield takeEvery('UPDATE_ORDER_REQUEST', updateOrder) // UPDATE regular order
  yield takeEvery('UPDATE_ASSIGN_REQUEST', assignToEmployee)
  yield takeEvery('GET_ALL_ORDERS_REQUESTED', fetchAllOrders )
  yield takeEvery('PAY_ORDER_REQUEST', payOrder) // PAY
  yield takeEvery('GET_ORDERSBYTARGET_REQUEST',fetchOrdersByTarget)
}

export default RegularSaga

