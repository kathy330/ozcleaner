
import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

// import API from our API folder, this just is a example

const gitApi = 'http://localhost:8000/regular/'




function* fetchRegularUrl() {
  // console.log(url)
  try{
    const data = yield call(axios.get, gitApi)
    // 🌟 这个{type:'GET_GIT_SUCCESS',repos:data} 的repos的名字就是
    //  git-reducer.js 里的 ‘repos_in_reducer_init: action.repos’ 的 repos
    // 两者名字必须一样
    console.log(data)
    yield put({type:'GET_REGULAR_SUCCESS',repos:data.data})
  }
  catch(e) {
    console.log(e)
    yield put({type:'GET_REGULAR_FAILED',payload:e})
  }
}

function* RegularSaga() {
  yield takeEvery('GET_REGULAR_REQUEST',fetchRegularUrl)
}

export default RegularSaga