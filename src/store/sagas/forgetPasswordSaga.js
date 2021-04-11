/* eslint-disable no-unused-vars */
import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* forgetPassword(action) {
  try {
    // console.log("hello")
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/recover', action.payload)
    yield put({ type: 'USER_EMAIL_REQUEST_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem("authLevel", "user") // 给一个user权限
    // document.location.href = '/order'
  } catch (e) {
    // console.log(action)
    yield put({ type: 'USER_EMAIL_REQUEST_FAILED', payload: e.response.data.error })
    // console.log(e.response.data.error)
  }
}
function* forgetPasswordEmployee(action) {
  try {
    // console.log("hello")
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/employees/recover', action.payload)
    yield put({ type: 'EMPLOYEE_EMAIL_REQUEST_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem("authLevel", "employee") // 给一个user权限
    // document.location.href = '/order'
  } catch (e) {
    // console.log(action)
    yield put({ type: 'EMPLOYEE_EMAIL_REQUEST_FAILED', payload: e.response.data.error })
    // console.log(e.response.data.error)
  }
}

function* resetPassword(action) {
  
  try {
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/resetPassword', action.payload)
    // yield put({ type: 'USER_RESET_REQUEST', payload: userInfo })
    yield put({ type: 'USER_RESET_REQUEST_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem("authLevel", "user") // 给一个user权限
  


  } catch (e) {
    yield put({ type: 'USER_RESET_REQUEST_FAILED', payload: e.response.data.error})
    console.log(e.response.data.error)
  }
}

function* resetPasswordEmployee(action) {
  
  try {
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/employees/resetPassword', action.payload)
    // yield put({ type: 'USER_RESET_REQUEST', payload: userInfo })
    yield put({ type: 'EMPLOYEE_RESET_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem("authLevel", "employee") // 给一个user权限
  


  } catch (e) {
    yield put({ type: 'EMPLOYEE_RESET_FAILED', payload: e.response.data.error})
    console.log(e.response.data.error)
  }
}


function* forgetPasswordSaga() {
  yield takeEvery('USER_EMAIL_REQUEST', forgetPassword)
  yield takeEvery('EMPLOYEE_EMAIL_REQUEST', forgetPasswordEmployee)
  yield takeEvery('USER_RESET_REQUEST', resetPassword)
  yield takeEvery('EMPLOYEE_RESET_REQUEST', resetPasswordEmployee)
}

export default forgetPasswordSaga
