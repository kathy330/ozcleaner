import {all} from 'redux-saga/effects'
import RegularSaga from './regularClean'
import UsersSage from './usersSaga'
// import testSaga from './userRegistrationSaga'
import EmployeeSaga from './emplyeeDetail'

export default function* rootSaga() {
  // 如果有更多的放在这下面;
  yield all([
    RegularSaga(),
    UsersSage(),
    // testSaga(),
    EmployeeSaga(),

  ])
  // 另外的写法：
  // yield all([fork(github), fork(user)]);
}

// 旧的
// import { takeEvery } from 'redux-saga/effects'
// import asyncRequestOrders from './zpractive/handlers/todo'
// export default function* watcherSaga() {
//     yield takeEvery("LOAD_ORDER_REQUESTED", asyncRequestOrders)
// }