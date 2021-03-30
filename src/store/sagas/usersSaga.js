/* eslint-disable no-unused-vars */
import { put, call, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'

function* userLogin(action) {
  try {
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/users/login', action.payload)
    yield put({ type: 'USER_SIGNIN_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  } catch (e) {
    yield put({ type: 'USER_SIGNIN_FAIL', payload: e.response.data.error })
  }
}

function* userRegister(action) {
  try {
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/users/registration', action.payload)
    yield put({ type: 'USER_REGISTER_SUCCESS', payload: userInfo })
    yield put({ type: 'USER_SIGNIN_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  } catch (e) {
    yield put({ type: 'USER_REGISTER_FAIL', 
    payload: e.response.data.error })
  }
}

function* userSignout() {
  localStorage.removeItem('userInfo')
  yield put({ type: 'USER_SIGNOUT' })
  document.location.href = '/'
}

// functin* privateAPI(action) {
//   const token = yield select(userInfo);
//   const headerParams = {
//     Authorization: `Bearer ${token}`
//   };
//   console.log(token, headerParams);
//   try {
//     yield call(axios.post, "/posts/", action.payload, {headers:headerParams});
//     yield call(getPosts());
//   } catch (error) {
//     document.location.href = '/'
//   }
// }

function* UsersSaga() {
  yield takeEvery('USER_SIGNIN_REQUEST', userLogin)
  yield takeEvery('USER_REGISTER_REQUEST', userRegister)
  yield takeEvery('USER_SIGNOUT_REQUEST', userSignout)
}

export default UsersSaga
