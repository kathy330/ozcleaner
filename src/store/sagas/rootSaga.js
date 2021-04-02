import {all} from 'redux-saga/effects'
import RegularSaga from './RCorderSaga'
import EndofleaseSaga from './ECorderSaga'
import UserListSaga from './userListSaga'
import EmployeesListSaga from './employeesListSaga'
import CusDetailSaga from './customersDetail'
import CusDetailTableSaga from './customersDetailsTable'
import StaffDetailSaga from './staffsDetail'
import StaffDetailTableSaga from './staffsDetailsTable'
import UsersSaga from './usersSaga'
// // import testSaga from './userRegistrationSaga'
import EmployeeSaga from './emplyeeDetail'
import EmployeeCertificationSaga from './employeeSaga'

export default function* rootSaga() {
  // 如果有更多的放在这下面;
  yield all([
    RegularSaga(),
    EndofleaseSaga(),
    UserListSaga(),
    EmployeesListSaga(),
    CusDetailSaga(),
    CusDetailTableSaga(),
    StaffDetailSaga(),
    StaffDetailTableSaga(),
    // testSaga(),
    EmployeeSaga(),
    UsersSaga(),
    EmployeeCertificationSaga(),
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