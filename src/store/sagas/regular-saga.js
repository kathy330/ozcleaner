
import {call,put,takeEvery} from 'redux-saga/effects'
 
// const gitApi = 'https://api.github.com/users/vincent-9-7/repos'
const gitApi = 'http://localhost:8000/regular/'


function getApi () {
  return fetch(gitApi,{
    method:'GET',
    headers:{
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(err=>console.log(err))
}

function* fetchRegularUrl() {
  // console.log(url)
  try{
    const data = yield call(getApi)
    // 🌟 这个{type:'GET_GIT_SUCCESS',repos:data} 的repos的名字就是
    //  git-reducer.js 里的 ‘repos_in_reducer_init: action.repos’ 的 repos
    // 两者名字必须一样
    yield put({type:'GET_REGULAR_SUCCESS',repos:data})
  }
  catch(e) {
    yield put({type:'GET_REGULAR_FAILED',message:e.message})
  }
}

function* RegularSaga() {
  yield takeEvery('GET_REGULAR_REQUEST',fetchRegularUrl)
}

export default RegularSaga