import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

const apiUrl = 'http://localhost:8000/users'

function* fetchUsers() {
  try {
    const users = yield call(axios.get, apiUrl)
    yield put({ type: "GET_USERS_SUCCESS", users: users.data })
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
}

function* UserSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default UserSaga