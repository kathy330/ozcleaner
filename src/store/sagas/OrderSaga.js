import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// const gitApi = 'http://localhost:8000/regular/task/1'
const postRCApi = 'http://localhost:8000/regular'
const postECApi = 'http://localhost:8000/endOfLease/'

function* getRegularOrder(action) {
  try {
    const { _id, type } = action.payload
    console.log(_id, 'objectID')
    console.log(type, 'type')
    const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
    const getApi = `http://localhost:8000/${model}/${_id}`
    const data = yield call(axios.get, getApi)
    yield put({ type: 'GET_ORDER_SUCCESS', repos: data.data })
  } catch (e) {
    console.log(e)
    yield put({ type: 'GET_ORDER_FAILED', payload: e })
  }
}

function* updateRegularOrder(action) {
  const { id, orderstatus, type } = action.payload
  console.log(id)
  console.log(action.payload)
  console.log(orderstatus)
  console.log(type)
  const update = { status: orderstatus }
  const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
  const updateApi = `http://localhost:8000/${model}/${id}`  // PUT方法更新regular

  try {
    const regularData = yield call(axios.put, updateApi, update)
    console.log(regularData)
    console.log(update)
    yield put({ type: 'UPDATE_REGULAR_SUCCESS', repos: update })
    // 这个data是返回对象reponse的data属性
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'UPDATE_REGULAR_FAILED', payload: e })
  }
}

// 1/3 post regular order --dongyu
function* postRegularOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  // console.log("Post from component: ",action.payload) 
  const {token} = JSON.parse(localStorage.getItem('userInfo')).data
  const Header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const result = yield call(axios.post,postRCApi, action.payload,{headers:Header})
  const {data} = result
  // console.log('return from backend: ', data)
  if(result.errors) {
    console.log("regular order post failed!",result.errors)
    yield put({type:'POST_REGULAR_FAILED',errorInSaga:result.errors})
  } 
  else {
    // console.log("regular order post successss!",result)
    // yield put({ type: 'POST_REGULAR_SUCCESS', postInSaga: action.payload })
    yield put({ type: 'POST_REGULAR_SUCCESS', postInSaga: data })


    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('regularCleanOrder', JSON.stringify(action.payload))
    // 下单完成后重定向，但是会刷新页面，reducer存储值消失
    // window.location.href = "http://www.baidu.com"
    // window.location.href = "/order/confirm"
  }
}

// 2/3 post end of lease order --dongyu
function* postEndLeaseOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  // console.log("Post from component: ",action.payload) 
  const {token} = JSON.parse(localStorage.getItem('userInfo')).data
  const Header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const result = yield call(axios.post,postECApi, action.payload,{headers:Header})
  const {data} = result
  // console.log('return from backend: ', data)
  if(result.errors) {
    console.log("end of lease post failed!",result.errors)
    yield put({type:'POST_ENDOFLEASE_FAILED',errorInSaga:result.errors})
  } 
  else {
    // yield put({ type: 'POST_ENDOFLEASE_SUCCESS', postInSaga: action.payload })
    yield put({ type: 'POST_ENDOFLEASE_SUCCESS', postInSaga: data })
    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('endofleaseCleanOrder', JSON.stringify(action.payload))
    // window.location.href = "/order/confirm" // 下单完成后重定向
  }
}

// 3/3 PAY order --dongyu
function* payOrder() {
    yield put({ type: 'PAY_ORDER_SUCCESS', postInSaga: 'success!!' })
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* RegularSaga() {
  // yield takeLatest('GET_REGULAR_REQUEST',fetchRegularUrl)
  yield takeEvery('GET_ORDER_REQUEST', getRegularOrder) // GEt 全部 ORDER
  yield takeEvery('POST_REGULAR_REQUEST', postRegularOrder) // POST to regular order
  yield takeEvery('POST_ENDOFLEASE_REQUEST', postEndLeaseOrder) // POST to end order
  yield takeEvery('UPDATE_REGULAR_REQUEST', updateRegularOrder) // UPDATE regular order

  yield takeEvery('PAY_ORDER_REQUEST', payOrder) // PAY
}

export default RegularSaga




// function postToRegular (data) {
//   // const {token} = JSON.parse(localStorage.getItem('userInfo')).data
//   return fetch(postApi, {
//     method:'POST',
//     headers:{
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       // 'Authorization': token
//     },
//     body:JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .catch(err=>console.log(err))
// }
// const result = yield call(postToRegular, action.payload)