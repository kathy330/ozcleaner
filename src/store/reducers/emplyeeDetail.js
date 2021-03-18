
import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  repos_in_reducer_init: [],
  error:null,
  ABN:123,
}
function emplyeeDetail(state = initialState,action) {
  switch (action.type) {

    case actionType.GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading:true
      }

    case actionType.GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: action.payload
      }

    case actionType.GET_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: [],
        error:action.payload
      }

    default:
      return state
  }
}

export default emplyeeDetail