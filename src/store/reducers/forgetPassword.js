import actionTypes from '../actions/actionTypes'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { loading: true }
    case actionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const forgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_EMAIL_REQUEST:
      return { loading: true }
    case actionTypes.USER_EMAIL_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionTypes.USER_EMAIL_REQUEST_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
