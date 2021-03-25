import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// const apiUrl = `http://localhost:8000/userslist?page=1&pageSize=3`

function* fetchEmployees(action) {
  try {
    const { page, pageSize } = action.payload
    const apiUrl = `http://localhost:8000/employeeslist?page=${page}&pageSize=${pageSize}`
    const users = yield call(axios.get, apiUrl)
    // console.log('apiURL', apiUrl);
    yield put({ type: "GET_EMPLOYEES_SUCCESS", users: users.data })
  } catch (e) {
    yield put({ type: 'GET_EMPLOYEES_FAILED', message: e.message })
  }
  
}

function* EmployeesListSaga() {
  yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees)
}

export default EmployeesListSaga