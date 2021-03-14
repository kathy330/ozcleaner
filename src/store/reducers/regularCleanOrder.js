
import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  error:null,
  repos_in_reducer_init: ['init value'],


}

function regularReducer(state = initialState,action) {
  switch (action.type) {

    // GET regular order --dongyu
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
        error:action.payload
        // error:action.data.err
      }

    // POST regular order --dongyu
    case actionType.POST_REGULAR_REQUEST:
      return {
        ...state,
        loading: true,
      }
  
    case actionType.POST_REGULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        // 🔥🔥 postInSaga是在sagas/post-Saga/..yield put后面的第一个参数参数-postInSaga
        // yield put({type:'POST_REGULAR_SUCCESS',➡️ postInSaga ⬅️:result})
        repos_in_reducer_init: action.postInSaga
      }

    case actionType.POST_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init:[],
        error:action.errorInSaga,
      }

    default:
      return state
  }
}

export default regularReducer