import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import header from "./header"

function* fetchStats() {
  try{
    const apiUrl = `http://localhost:8000/getInfoNum`
    const data = yield call(axios.get, apiUrl,header())
    // console.log(data)
    yield put({type:'GET_STATS_SUCCESS',data:data.data})
  }
  catch(e) {
    yield put({type:'GET_STATS_FAILED',message:e.message})
  }
}

function* StatsSaga() {
  yield takeEvery('GET_STATS_REQUEST',fetchStats)
}

export default StatsSaga