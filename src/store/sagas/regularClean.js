
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// import {getCOMPLETERequest} from "../actions/actionCreator"


// const gitApi = 'http://localhost:8000/regular/'
const gitApi = 'http://localhost:8000/regular/task/3'
// const gitApi = 'http://localhost:8000/users/2'
const postApi = 'http://localhost:8000/regular'
const postApi2 = 'http://localhost:8000/endOfLease'



function* getRegularOrder() {
  try {
    const regularData = yield call(axios.get, gitApi)
    // 🌟 这个{type:'GET_GIT_SUCCESS',repos:regularData.data} 的repos的名字就是
    //  git-reducer.js 里的 ‘repos_in_reducer_init: action.repos’ 的 repos
    // 两者名字必须一样
    console.log('Data by the GET method is: ', regularData)
    yield put({ type: 'GET_REGULAR_SUCCESS', repos: regularData.data }) // 这个data是返回对象reponse的data属性
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'GET_REGULAR_FAILED', payload: e })
  }
}

function postToRegular(data) {
  return fetch(postApi, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 要有token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

function* postRegularOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  console.log("Post from component: ", action.payload)
  const result = yield call(postToRegular, action.payload)
  if (result.errors) {
    console.log("regular order post failed!", result.errors)
    yield put({ type: 'POST_REGULAR_FAILED', errorInSaga: result.errors })
  }
  else {
    console.log("regular order post successss!", result)
    yield put({ type: 'POST_REGULAR_SUCCESS', postInSaga: action.payload })

    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('regularCleanOrder', JSON.stringify(action.payload))
    // window.location.href = "http://www.baidu.com" // 下单完成后重定向
    window.location.href = "/order/confirm"
  }
}

function postToEndOfLease(data) {
  return fetch(postApi2, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 要有token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

function* postEndLeaseOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  console.log("Post from component: ", action.payload)
  const result = yield call(postToEndOfLease, action.payload)
  if (result.errors) {
    console.log("end of lease post failed!", result.errors)
    yield put({ type: 'POST_ENDOFLEASE_FAILED', errorInSaga: result.errors })
  }
  else {
    console.log("end of lease post successss!", result)
    yield put({ type: 'POST_ENDOFLEASE_SUCCESS', postInSaga: action.payload })
    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('regularCleanOrder', JSON.stringify(action.payload))
    window.location.href = "/order/confirm" // 下单完成后重定向
  }
}

// 这个getCompleteOrder没啥用，不能跨页面取值，可删
// function* getCompleteOrder(action) {

//   console.log(action.payload)
//   // const data = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
//   // console.log('aa',data)

//   const data = yield select(getCOMPLETERequest)
//   console.log("COMPLETETETET1: ",data)  // 这里获取到的数据都是初始化时候reducer的数据
//   // console.log("COMPLETETETET2: ",data.payload.regular_in_reducer_index) 

//   try{
//      // 这个data是返回对象reponse的data属性， action.payload在right里定义了是ddaata:'ssss'
//     yield put({type:'GET_COMPLETE_SUCCESS',repos:action.payload}) 
//   }
//   catch(e) {
//     console.log(e)
//     yield put({type:'GET_COMPLETE_FAILED',payload:e})
//   }
// }


/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* RegularSaga() {
  // yield takeLatest('GET_REGULAR_REQUEST',fetchRegularUrl)
  yield takeEvery('GET_REGULAR_REQUEST', getRegularOrder) // GEt 全部 ORDER
  yield takeEvery('POST_REGULAR_REQUEST', postRegularOrder) // POST to regular order
  // yield takeEvery('GET_COMPLETE_REQUEST',getCompleteOrder) // POST to regular order
  yield takeEvery('POST_ENDOFLEASE_REQUEST', postEndLeaseOrder) // POST to regular order


}

export default RegularSaga