/* eslint-disable no-unused-vars */
import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* employeeLogin(action) {
  try {
    const userInfo = 
    yield call(axios.post,'http://localhost:8000/users/login', action.payload)
    yield put({ type: 'USER_SIGNIN_SUCCESS', payload: userInfo })
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  } catch (e) {
    console.log(e.response)
    yield put({ type: 'USER_SIGNIN_FAIL', payload: e.response.data.error })
  }
}

function* employeeRegister(action) {
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

function* employeeSignout() {
  localStorage.removeItem('userInfo')
  yield put({ type: 'USER_SIGNOUT' })
  document.location.href = '/'
}

function* EmployeeSaga() {
  yield takeEvery('EMPLOYEE_SIGNIN_REQUEST', employeeLogin)
  yield takeEvery('EMPLOYEE_REGISTER_REQUEST', employeeRegister)
  yield takeEvery('EMPLOYEE_SIGNOUT_REQUEST', employeeSignout)
}

export default EmployeeSaga