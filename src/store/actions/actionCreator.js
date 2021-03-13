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
  