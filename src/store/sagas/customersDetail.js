import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
 

// import API from our API folder, this just is a example

const apiUrl = `http://localhost:8000/users/0`




function* fetchCusDetailUrl() {
  // console.log(url)
  try{
    const users = yield call(axios.get, apiUrl)
    // 🌟 这个{type:'GET_GIT_SUCCESS',repos:data} 的repos的名字就是
    //  git-reducer.js 里的 ‘repos_in_reducer_init: action.repos’ 的 repos
    // 两者名字必须一样
    console.log(users)
    yield put({type:'GET_CUSDETAIL_SUCCESS',users:users.data})
  }
  catch(e) {
    yield put({type:'GET_CUSDETAIL_FAILED',message:e.message})
  }
}

function* CusDetailSaga() {
  yield takeEvery('GET_CUSDETAIL_REQUEST',fetchCusDetailUrl)
}

export default CusDetailSaga