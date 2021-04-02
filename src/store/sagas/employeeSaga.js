/* eslint-disable no-unused-vars */
import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const postAPI = "http://localhost:8000/employees/login"
 
// employeeLogin.use(cors()) // Use this after the variable declaration

function* employeeLogin(action) {
  try {
    const userInfo = 
    yield call(axios.post, postAPI, action.payload)
    yield put({ type: 'EMPLOYEE_SIGNIN_SUCCESS', payload: userInfo })
    localStorage.setItem('employeeInfo', JSON.stringify(userInfo))
  } catch (e) {
    console.log(e.response)
    yield put({ type: 'EMPLOYEE_SIGNIN_FAIL', payload: e.response.data.error })
  }
}


function* employeeRegister(action) {
 
  try {
    const  userInfo = 
    yield call(axios.post, "http://localhost:8000/employees/registration", action.payload)
    yield put({ type: 'EMPLOYEE_REGISTER_SUCCESS', payload:userInfo })
    // yield put({ type: 'EMPLOYEE_SIGNIN_SUCCESS', payload: employeeInfo })
    localStorage.setItem('employeeInfo', JSON.stringify(userInfo))
    // console.log(`from${  employeeInfo}`)
  } catch (e) {
    yield put({ type: 'EMPLOYEE_REGISTER_FAIL', 
    payload: e.response.data[Object.keys(e.response.data)[0]]})
    // console.log(e.response.data)
  }
}

function* employeeSignout() {
  localStorage.removeItem('employeeInfo')
  yield put({ type: 'EMPLOYEE_SIGNOUT' })
  document.location.href = '/'
}

function*  EmployeeCertificationSaga () {
  yield takeEvery('EMPLOYEE_SIGNIN_REQUEST', employeeLogin)
  yield takeEvery('EMPLOYEE_REGISTER_REQUEST', employeeRegister)
  yield takeEvery('EMPLOYEE_SIGNOUT_REQUEST', employeeSignout)
}

export default EmployeeCertificationSaga 

