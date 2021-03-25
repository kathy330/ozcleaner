import actionTypes from '../actions/actionTypes'

const initialState = {
  users: [],
  loading: true,
  error: null,
}

function users( state = initialState, action){
  // console.log(state)
  switch(action.type){
    case actionTypes.GET_USERS_REQUESTED:
      return{
        ...state,
        loading: true
      }
    case actionTypes.GET_USERS_SUCCESS:
      return{
        ...state,
        loading: false,
        users: action.users
      }
    case actionTypes.GET_USERS_FAILED:
      return{
        ...state,
        loading: false,
        error: action.message
      }
    case actionTypes.GET_EMPLOYEES_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case actionTypes.GET_EMPLOYEES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}

export default users