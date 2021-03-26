import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// const apiUrl = `http://localhost:8000/userslist?page=1&pageSize=3`

function* fetchUsers(action) {
  try {
    const { page, pageSize } = action.payload
    const apiUrl = `http://localhost:8000/userslist?page=${page}&pageSize=${pageSize}`
    const users = yield call(axios.get, apiUrl)
    // console.log('data', apiUrl)
    yield put({ type: "GET_USERS_SUCCESS", users: users.data })
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
  
}

function* UserListSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default UserListSaga