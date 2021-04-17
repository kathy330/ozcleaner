// Reducer：
// 接收state和action对象，决定如何在必要时更新状态，
// 并返回新的状态：(state, action) => newState。
// 您可以将reducer视为事件侦听器，该事件侦听器根据接收到的操作（事件）类型来处理事件。
import { combineReducers } from 'redux'
// import regularReducer from './regularClean'
import userslist from './userslist'
import order from './orderReducer'
import CusDetails from "./customersDetail"
import StaffDetails from './staffsDetail'
import emplyeeReducer from './emplyeeDetail'
import staffDetailsTable from './staffsDetailTable'
// import allOrders from './allOrders'
// import { userRegisterReducer, userSigninReducer } from './userReducer'
import { userRegisterReducer, userSigninReducer } from './userReducer'
import {employeeRegisterReducer,employeeSigninReducer} from './employeeReducer'
import{forgetPasswordReducer,
resetPasswordReducer,forgetPasswordEmployeeReducer,
resetPasswordEmployeeReducer} from './forgetPassword'

// 🎉 rootReduce会被store/store.js使用
const rootReducer = combineReducers({
  order,
  userslist,
  cusDetails:CusDetails,
  staffDetails:StaffDetails,
  staffDetailsTable:staffDetailsTable,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  employee_in_reducer_index: emplyeeReducer,
  // userSignin: userSigninReducer,
  // userRegister: userRegisterReducer,
  employeeSignin: employeeSigninReducer,
  employeeRegister: employeeRegisterReducer,
  // allOrders,
  forgetPassword:forgetPasswordReducer,
  resetPassword:resetPasswordReducer,
  forgetpasswordEmployee:forgetPasswordEmployeeReducer,
  resetpasswordEmployee: resetPasswordEmployeeReducer


})
export default rootReducer

// 旧的
// import { combineReducers } from "redux";
// import orders from "./todo"
// export default combineReducers({
//     orders
// })
