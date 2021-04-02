import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// const gitApi = 'http://localhost:8000/regular/task/1'
const postApi = 'http://localhost:8000/regular'

function* getRegularOrder(action) {
  try {
    const { taskid } = action.payload
    console.log(taskid, 'asdffffff')
    const gitApi = `http://localhost:8000/regular/task/${taskid}`

    const regularData = yield call(axios.get, gitApi)
    // 🌟 这个{type:'GET_GIT_SUCCESS',repos:regularData.data} 的repos的名字就是
    //  git-reducer.js 里的 ‘repos_in_reducer_init: action.repos’ 的 repos
    // 两者名字必须一样
    // console.log('Data by the GET method is: ',regularData)
    yield put({ type: 'GET_REGULAR_SUCCESS', repos: regularData.data }) // 这个data是返回对象reponse的data属性
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'GET_REGULAR_FAILED', payload: e })
  }
}

function* updateRegularOrder(action) {
  const { taskid, orderstatus } = action.payload
  console.log(orderstatus)
  const update = { status: orderstatus }
  const updateApi = `http://localhost:8000/regular/${taskid}`  // PUT方法更新regular

  try {
    const regularData = yield call(axios.put, updateApi, update)
    console.log(regularData)
    yield put({ type: 'UPDATE_REGULAR_SUCCESS', repos: update })
    // 这个data是返回对象reponse的data属性
  }
  catch (e) {
    console.log(e)
    yield put({ type: 'UPDATE_REGULAR_FAILED', payload: e })
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
  // console.log("Post from component: ",action.payload) 
  const result = yield call(postToRegular, action.payload)
  if (result.errors) {
    console.log("regular order post failed!", result.errors)
    yield put({ type: 'POST_REGULAR_FAILED', errorInSaga: result.errors })
  }
  else {
    // console.log("regular order post successss!",result)
    yield put({ type: 'POST_REGULAR_SUCCESS', postInSaga: action.payload })

    // 🔥数据存储到local storage里，可以直接用useSelector() 使用
    localStorage.setItem('regularCleanOrder', JSON.stringify(action.payload))
    // 下单完成后重定向，但是会刷新页面，reducer存储值消失
    // window.location.href = "http://www.baidu.com"
    // window.location.href = "/order/confirm"
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
  yield takeEvery('UPDATE_REGULAR_REQUEST', updateRegularOrder) // UPDATE regular order


}

export default RegularSaga