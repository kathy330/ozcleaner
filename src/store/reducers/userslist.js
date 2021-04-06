import actionTypes from '../actions/actionTypes'

const initialState = {
  users: [],
  loading: true,
  error: null,
}

function users( state = initialState, action){
  console.log(action, action.users)
  switch(action.type){
    // get user list
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
    // get employee list
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
    // delete customer
    case actionTypes.DELETED_CUSTOMER_REQUEST:
      return{
        ...state,
        loading: true
      }
    case actionTypes.DELETED_CUSTOMER_SUCCESS:
      return{
        ...state,
        loading: false
      }
    // delete employee
    case actionTypes.DELETED_CUSTOMER_FAILED:
      return{
        ...state,
        loading: false,
        error: action.message
      }
    case actionTypes.DELETED_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETED_EMPLOYEE_SUCCESS:
      return {
        ...state,
        updateData: action.users,
        loading: false,
      }
    case actionTypes.DELETED_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case actionTypes.DELETED_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default users