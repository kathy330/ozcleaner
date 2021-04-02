/* eslint-disable no-unused-vars */
import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


 
// employeeLogin.use(cors()) // Use this after the variable declaration

function* employeeLogin(action) {
  try {
    const employeeInfo = 
    yield call(axios.post,'http://localhost:8000/employees/login', action.payload)
    yield put({ type: 'EMPLOYEE_SIGNIN_SUCCESS', payload: employeeInfo })
    localStorage.setItem('employeeInfo', JSON.stringify(employeeInfo))
  } catch (e) {
    console.log(e.response)
    yield put({ type: 'EMPLOYEE_SIGNIN_FAIL', payload: e.response.data.error })
  }
}


function* employeeRegister(action) {
 
  try {
    const employeeInfo = 
    yield call(axios.post, "http://localhost:8000/employees/registration", action.payload)
    yield put({ type: 'EMPLOYEE_REGISTER_SUCCESS', payload: employeeInfo })
    // yield put({ type: 'EMPLOYEE_SIGNIN_SUCCESS', payload: employeeInfo })
    localStorage.setItem('employeeInfo', JSON.stringify(employeeInfo))
    // console.log(`from${  employeeInfo}`)
  } catch (e) {
    yield put({ type: 'EMPLOYEE_REGISTER_FAIL', 
    payload: e.response.data.email })
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

