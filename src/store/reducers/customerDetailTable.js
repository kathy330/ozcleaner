import actionType from '../actions/actionTypes'

const initialState = {
  cusDetailsTable: [],
  loading: false,
  error:null
}

function CusDetailTableReducer(state = initialState,action) {
  switch (action.type) {

    case actionType.GET_CUSDETAILTABLE_REQUEST:
      return {
        ...state,
        loading:true
      }

    case actionType.GET_CUSDETAILTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        cusDetailsTable: action.users
      }

    case actionType.GET_CUSDETAILTABLE_FAILED:
      return {
        ...state,
        loading: false,
        error:action.message,
      }

    default:
      return state
  }
}

export default CusDetailTableReducer