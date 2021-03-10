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