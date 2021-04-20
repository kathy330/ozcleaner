
import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from "../actions/actionTypes"
import header from "./header"

// import API from our API folder, this just is a example

let getApi = ''
let updateAPI =''

function* fetchRegularUrl()   {
  // console.log(url)
  const level = localStorage.getItem('authLevel') 
  const info = JSON.parse(localStorage.getItem(`${level}Info`))
  const ID = info.data.objectID
  const person = level === 'user'? 'users' : 'employees'
  getApi = `http://localhost:8000/${person}/alltask/${ID}`
  // getApi='http://localhost:8000/employees/alltask/606ae8d38985eb80d70f58e6'
  try{
    // console.log(header())
    const data = yield call(axios.get, getApi,header())
    yield put({type:actionTypes.GET_HISTORY_SUCCESS,payload:data.data})
    // console.log(test)
  }
  catch(e) {
    console.log(e)
    yield put({type:actionTypes.GET_HISTORY_FAILED,payload:e})
  }
}

function* updateEmployeeProfile(action) {
  const level = localStorage.getItem('authLevel') 
  const info = JSON.parse(localStorage.getItem(`${level}Info`))
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