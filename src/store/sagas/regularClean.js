import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


// const gitApi = 'http://localhost:8000/regular/'
const gitApi = 'http://localhost:8000/regular/task/3'
// const gitApi = 'http://localhost:8000/users/2'

const postApi = 'http://localhost:8000/regular'


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

function postToServer(data) {
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
  const result = yield call(postToServer, action.payload)

  if (result.errors) {
    console.log("post failed!", result.errors)
    yield put({ type: 'POST_REGULAR_FAILED', errorInSaga: result.errors })
  }
  else {
    console.log("post successss!", result)
    yield put({ type: 'POST_REGULAR_SUCCESS', postInSaga: result })
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
  yield takeEvery('GET_REGULAR_REQUEST', getRegularOrder) // GEt 全部 ORDER
  yield takeEvery('POST_REGULAR_REQUEST', postRegularOrder) // POST to regular order


}

export default RegularSaga