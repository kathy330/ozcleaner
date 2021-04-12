
import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from "../actions/actionTypes"
import header from "./header"

// import API from our API folder, this just is a example

let gitApi = ''
let updateAPI =''

function* fetchRegularUrl()   {
  // console.log(url)
  const info = JSON.parse(localStorage.getItem('userInfo'))
  const level = localStorage.getItem('authLevel')
  const ID = info.data.objectID
  const person = level === 'user'? 'users' : 'employees'
  gitApi = `http://localhost:8000/${person}/alltask/${ID}`
  try{
    const data = yield call(axios.get, gitApi,header())

    yield put({type:actionTypes.GET_HISTORY_SUCCESS,payload:data.data})
  }
  catch(e) {
    console.log(e)
    yield put({type:actionTypes.GET_HISTORY_FAILED,payload:e})
  }
}

function* updateEmployeeProfile(action) {
  const info = JSON.parse(localStorage.getItem('userInfo'))
  const level = localStorage.getItem('authLevel')
  const ID = info.data.objectID
  const person = level === 'user'? 'users' : 'employees'
  updateAPI=`http://localhost:8000/${person}/${ID}`
  try{
    const data = yield call(axios.put, updateAPI ,action.payload,header())
    console.log(data)
    yield put({type:'UPDATE_PROFILE_SUCCESS',payload:data})
  }
  catch(e) {
    console.log(e)
    yield put({type:'UPDATE_PROFILE_FAILED',payload:e})
  }
}

function* WatchEmployeeSaga() {
  yield takeEvery(actionTypes.GET_HISTORY_REQUEST,fetchRegularUrl)
  yield takeEvery(actionTypes.UPDATE_PROFILE_REQUEST,updateEmployeeProfile)
}

export default WatchEmployeeSaga