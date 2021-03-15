import {call,put,takeEvery} from 'redux-saga/effects'

const postApi = 'http://localhost:8000/users/registration'



function postToServer (data) {
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

function* postRegularOrder(action) {
  // action.payload就是post-action.js的payload键，
  // 所以action.payload就等于post-action的obj
  console.log("Post from component: ",action.payload) 
  const result = yield call(postToServer, action.payload)
  
  if(result.errors) {
    console.log("post failed!",result.errors)
    yield put({type:'POST_REGULAR_FAILED',errorInSaga:result.errors})
  } 
  else {
    console.log("post successss!",result)
    yield put({type:'POST_REGULAR_SUCCESS',postInSaga:result})
  }
}


/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* testSaga() {
  // yield takeLatest('GET_REGULAR_REQUEST',fetchRegularUrl)
  yield takeEvery('POST_REGULAR_REQUEST',postRegularOrder) // POST to regular order


}

export default testSaga