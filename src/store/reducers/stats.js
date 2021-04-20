import actionType from '../actions/actionTypes'

const initialState = {
  statsData: [],
  loading: false,
  error:null
}

function statsReducer(state = initialState, action) {
    switch (action.type) {
  
      case actionType.GET_STATS_REQUEST:
        console.log("test")
        return {
          ...state,
          loading:true
        }
  
      case actionType.GET_STATS_SUCCESS:
        console.log(action)
        return {
          ...state,
          loading: false,
          statsData: action.data
        }
  
      case actionType.GET_STATS_FAILED:
        return {
          ...state,
          loading: false,
          error:action.message,
        }
  
      default:
        return state
    }
  }
  
  export default statsReducer