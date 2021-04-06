/* eslint-disable import/prefer-default-export */
import actionTypes from "./actionTypes"


export const loadOrdersSucceeded = res => ({
  type: actionTypes.LOAD_ORDER_SUCCEEDED,
  data: res
})

export const loadOrdersFailed = err => ({
  type: actionTypes.LOAD_ORDER_FAILED,
  data: { err }
})


//  1/6 GET Regular order -- 
export const getOrderRequest = (datalist) => ({
  type: actionTypes.GET_ORDER_REQUEST,
  payload: datalist,
})
export const getOrderSuccess = (datalist) => ({
  type: actionTypes.GET_ORDER_SUCCESS,
  payload: datalist,
})
export const getOrderFaild = (err) => ({
  type: actionTypes.GET_ORDER_FAILED,
  payload: err,
})

//  2/6 GET Endoflease order -- 
export const getENDRequest = (datalist) => ({
  type: actionTypes.GET_ENDOFLEASE_REQUEST,
  payload: datalist,
})
export const getENDSuccess = (datalist) => ({
  type: actionTypes.GET_ENDOFLEASE_SUCCESS,
  payload: datalist,
})
export const getENDFaild = (err) => ({
  type: actionTypes.GET_ENDOFLEASE_FAILED,
  payload: err,
})

//  3/6 POST Regular order -- dongyu 
export const postRegularRequest = (obj) => ({
  type: actionTypes.POST_REGULAR_REQUEST,
  payload: obj, // By convention, we put that information in a field called payload.
})
export const postRegularSuccess = (obj) => ({
  type: actionTypes.POST_REGULAR_SUCCESS,
  payload: obj,
})
export function postRegularFaild(obj) {
  return {
    type: actionTypes.POST_REGULAR_FAILED,
    payload: obj,
  }
}

//  4/6 POST Endoflease order -- dongyu 
export const postEndOfLeaseRequest = (obj) => ({
  type: actionTypes.POST_ENDOFLEASE_REQUEST,
  payload: obj, // By convention, we put that information in a field called payload.
})
export const postEndOfLeaseSuccess = (obj) => ({
  type: actionTypes.POST_ENDOFLEASE_SUCCESS,
  payload: obj,
})
export function postEndOfLeaseFaild(obj) {
  return {
    type: actionTypes.POST_ENDOFLEASE_FAILED,
    payload: obj,
  }
}


//  5/6 PAY Regular order -- dongyu 
export const payOrderRequest = (obj) => ({
  type: actionTypes.PAY_ORDER_REQUEST,
  payload: obj, 
})
export const payOrderSuccess = (obj) => ({
  type: actionTypes.PAY_ORDER_SUCCESS,
  payload: obj,
})

// 6/6 Update regular order -- 
export const updateRegularRequest = (obj) => ({
  type: actionTypes.UPDATE_REGULAR_REQUEST,
  payload: obj, // By convention, we put that information in a field called payload.
})
export const updateRegularSuccess = (obj) => ({
  type: actionTypes.UPDATE_REGULAR_SUCCESS,
  payload: obj,
})
export const updateRegularFaild = (obj) => ({
  type: actionTypes.UPDATE_REGULAR_FAILED,
  payload: obj,
})


// * getAllUserListRequest() is for get all users from userTable -- kathy
export const getAllUserListRequest = users => ({
  type: actionTypes.GET_USERS_REQUESTED,
  payload: users,
})

// * getAllEmployeeListRequest() is for get all users from userTable -- kathy
export const getAllEmployeeListRequest = employees => ({
  type: actionTypes.GET_EMPLOYEES_REQUESTED,
  payload: employees,
})



// * get history
export const getHistoryRequest = (datalist) => ({
  type: actionTypes.GET_HISTORY_REQUEST,
  payload: datalist,
})

export const getHistorySuccess = (datalist) => ({
  type: actionTypes.GET_HISTORY_SUCCESS,
  payload: datalist,
})
export const getHistoryFailed = (err) => ({
  type: actionTypes.GET_HISTORY_FAILED,
  payload: err,
})

//  update profile 
export const updateProfileRequest = (datalist) => ({
  type: actionTypes.UPDATE_PROFILE_REQUEST,
  payload: datalist,
})

export const updateProfileSuccess = (datalist) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: datalist,
})
export const updateProfileFailed = (err) => ({
  type: actionTypes.UPDATE_PROFILE_FAILED,
  payload: err,
})


// staff details page 
export const getSTAFFDETAILRequest = (users) => ({
  type: actionTypes.GET_STAFFDETAIL_REQUEST,
  payload: users,
})

export const getSTAFFDETAILTABLERequest = (users) => ({
  type: actionTypes.GET_STAFFDETAILTABLE_REQUEST,
  payload: users,
})

// customer details page
export const getCUSDETAILRequest = (users) => ({
  type: actionTypes.GET_CUSDETAIL_REQUEST,
  payload: users,
})

export const getCUSDETAILTABLERequest = (users) => ({
  type: actionTypes.GET_CUSDETAILTABLE_REQUEST,
  payload: users,
})


export const signin = (payload) => ({
  type: actionTypes.USER_SIGNIN_REQUEST,
  payload,
})

export const register = (payload) => ({
  type: actionTypes.USER_REGISTER_REQUEST,
  payload,
})

export const signout = () => ({
  type: actionTypes.USER_SIGNOUT_REQUEST,
})


export const signinEmployee = (payload) => ({
  type: actionTypes.EMPLOYEE_SIGNIN_REQUEST,
  payload,
})

export const registerEmployee = (payload) => ({
  type: actionTypes.EMPLOYEE_REGISTER_REQUEST,
  payload,
})

export const signoutEmployee = () => ({
  type: actionTypes.EMPLOYEE_SIGNOUT_REQUEST,
})

// * getAllOrdersRequest() is for  get all order
// * includes regular clean & end of lease clear -- kathy
export const getAllOrersRequest = orders => ({
  type: actionTypes.GET_ALL_ORDERS_REQUESTED,
  payload: orders
})

export const changeOrder = num => ({
  type: actionTypes.CHANGE_ORDER,
  payload: num
})