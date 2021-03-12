
import * as actionType from '../actions/regular-action-types'

const initialState = {
  loading: false,
  repos_in_reducer_init: [],
  error:null
}

function regularReducer(state = initialState,action) {
  switch (action.type) {

    case actionType.GET_REGULAR_REQUEST:
      return {
        ...state,
        loading:true
      }

    case actionType.GET_REGULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: action.repos
      }

    case actionType.GET_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: [],
        error:action.data.err
      }

    default:
      return state
  }
}

export default regularReducer