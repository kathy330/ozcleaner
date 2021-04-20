import {all} from 'redux-saga/effects'
import OrderSaga from './OrderSaga'
import UserListSaga from './userListSaga'
import EmployeesListSaga from './employeesListSaga'
import CusDetailSaga from './customersDetail'
import StaffDetailSaga from './staffsDetail'
import UsersSaga from './usersSaga'
// // import testSaga from './userRegistrationSaga'
import EmployeeSaga from './emplyeeDetail'
import EmployeeCertificationSaga from './employeeSaga'
import forgetPasswordSaga from './forgetPasswordSaga'
import statsSaga from "./statsSaga"

export default function* rootSaga() {
  // 如果有更多的放在这下面;
  yield all([
    OrderSaga(),
    UserListSaga(),
    EmployeesListSaga(),
    CusDetailSaga(),
    StaffDetailSaga(),
    statsSaga(),
    EmployeeSaga(),
    UsersSaga(),
    EmployeeCertificationSaga(),
    forgetPasswordSaga()
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