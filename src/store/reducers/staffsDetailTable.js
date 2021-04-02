import actionType from '../actions/actionTypes'

const initialState = {
  staffDetailsTable: [],
  loading: false,
  error:null
}

function StaffDetailTableReducer(state = initialState,action) {
  switch (action.type) {

    case actionType.GET_STAFFDETAILTABLE_REQUEST:
      return {
        ...state,
        loading:true
      }

    case actionType.GET_STAFFDETAILTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        staffDetailsTable: action.users
      }

    case actionType.GET_STAFFDETAILTABLE_FAILED:
      return {
        ...state,
        loading: false,
        error:action.message,
      }

    default:
      return state
  }
}

export default StaffDetailTableReducer