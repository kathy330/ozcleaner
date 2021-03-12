
import * as ActionTypes from './regular-action-types'


// 🌟 saga/userSaga会最后使用'GET_USERS_REQUESTED'，
// 这里的action需要监听什么时候使用
export const getREGULARRequest = (datalist) => ({
  type: ActionTypes.GET_REGULAR_REQUEST,
  payload: datalist,
})

export const getREGULARSuccess = (datalist) => ({
  type: ActionTypes.GET_REGULAR_SUCCESS,
  payload: datalist,
})

export const getREGULARFaild = (err) => ({
  type: ActionTypes.GET_REGULAR_FAILED,
  payload: err,
})



