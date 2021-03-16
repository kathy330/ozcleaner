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


//  GET Regular order -- dongyu 
export const getREGULARRequest = (datalist) => ({
  type: actionTypes.GET_REGULAR_REQUEST,
  payload: datalist,
})
export const getREGULARSuccess = (datalist) => ({
  type: actionTypes.GET_REGULAR_SUCCESS,
  payload: datalist,
})
export const getREGULARFaild = (err) => ({
  type: actionTypes.GET_REGULAR_FAILED,
  payload: err,
})

//  POST Regular order -- dongyu 
export const postRegularRequest = (obj) => ({
  type:actionTypes.POST_REGULAR_REQUEST,
  payload:obj, // By convention, we put that information in a field called payload.
})
export const postRegularSuccess = (obj) => ({
  type:actionTypes.POST_REGULAR_SUCCESS,
  payload:obj, 
})
export function postRegularFaild(obj) {
  return{
    type:actionTypes.POST_REGULAR_FAILED,
    payload:obj, 
  }
}

// * getAllUserListRequest() is for get all users from userTable -- kathy
export const getAllUserListRequest = users => ({
  type: actionTypes.GET_USERS_REQUESTED,
  payload: users,
})

// * get employee 
  // employee
  export const getEmployeeRequest = (datalist) => ({
    type: actionTypes.GET_EMPLOYEE_REQUEST,
    payload: datalist,})
  
  export const getEmployeeSuccess = (datalist) => ({
    type: actionTypes.GET_EMPLOYEE_SUCCESS,
    payload: datalist,
  })
  export const GET_EMPLOYEE_FAILED = (err) => ({
    type: actionTypes.GET_EMPLOYEE_FAILED,
    payload: err,
  })



