import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'

const gitApi = 'http://localhost:8000/endOfLease/task/1'
const postApi = 'http://localhost:8000/endOfLease/'


function* getEndofLeaseOrder() {
  try{
    const endofleaseData = yield call(axios.get, gitApi)
    // console.log('Data by the GET method is: ',endofleaseData)
    yield put({type:'GET_ENDOFLEASE_SUCCESS',repos:endofleaseData.data})
  }
  catch(e) {
    console.log(e)
    yield put({type:'GET_ENDOFLEASE_FAILED',payload:e})
  }
}


function postToEndOfLease (data) {
  return fetch(postApi, {
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 要有token
    },
    body:JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(err=>console.log(err))
}

function* postEndLeaseOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  console.log("Post from component: ",action.payload) 
  const result = yield call(postToEndOfLease, action.payload)
  if(result.errors) {
    console.log("end of lease post failed!",result.errors)
    yield put({type:'POST_ENDOFLEASE_FAILED',errorInSaga:result.errors})
  } 
  else {
    console.log("end of lease post successss!",result)
    yield put({type:'POST_ENDOFLEASE_SUCCESS',postInSaga:action.payload})
    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('endofleaseCleanOrder',JSON.stringify(action.payload))
    window.location.href = "/order/confirm" // 下单完成后重定向
  }
}



/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* EndofleaseSaga() {
  yield takeEvery('GET_ENDOFLEASE_REQUEST',getEndofLeaseOrder) // GEt 全部 ORDER
  yield takeEvery('POST_ENDOFLEASE_REQUEST',postEndLeaseOrder) // POST to end order
}

export default EndofleaseSaga