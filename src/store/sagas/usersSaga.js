import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'http://localhost:8000/users'

function* fetchUsers() {
  try {
    const users = yield call(axios.get, apiUrl)
    yield put({ type: 'GET_USERS_SUCCESS', users: users.data })
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
}

function* userLogin(action) {
  try {
    yield call(axios.post('http://localhost:8000/users/login', action.payload))
  } catch (e) {
    yield put({ type: 'USER_SIGNIN_FAIL', payload: action.payload })
  }
}

function* UsersSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
  yield takeEvery('USER_SIGNIN_REQUEST', userLogin)
}

export default UsersSaga
