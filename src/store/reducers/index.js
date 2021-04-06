// Reducer：
// 接收state和action对象，决定如何在必要时更新状态，
// 并返回新的状态：(state, action) => newState。
// 您可以将reducer视为事件侦听器，该事件侦听器根据接收到的操作（事件）类型来处理事件。
import { combineReducers } from 'redux'
// import regularReducer from './regularClean'
import userslist from './userslist'
import order from './OrderReducer'
import endofleaseReducer from './ECorderReducer'
import CusDetails from "./customersDetail"
import CusDetailsTable from "./customerDetailTable"
import StaffDetails from './staffsDetail'
import emplyeeReducer from './emplyeeDetail'
import staffDetailsTable from './staffsDetailTable'
// import allOrders from './allOrders'
// import { userRegisterReducer, userSigninReducer } from './userReducer'
import { userRegisterReducer, userSigninReducer } from './userReducer'
import {employeeRegisterReducer,employeeSigninReducer} from './employeeReducer'

// 🎉 rootReduce会被store/store.js使用
const rootReducer = combineReducers({
  order,
  userslist,
  cusDetails:CusDetails,
  cusDetailsTable:CusDetailsTable,
  staffDetails:StaffDetails,
  staffDetailsTable:staffDetailsTable,
  endoflease_in_reducer_index: endofleaseReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  employee_in_reducer_index: emplyeeReducer,
  // userSignin: userSigninReducer,
  // userRegister: userRegisterReducer,
  employeeSignin: employeeSigninReducer,
  employeeRegister: employeeRegisterReducer,
  // allOrders,
})
export default rootReducer

// 旧的
// import { combineReducers } from "redux";
// import orders from "./todo"
// export default combineReducers({
//     orders
// })
