
import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  error:null,
  repos_in_reducer_init: 'init value',
  completeinfo:{
    info: localStorage.getItem('regularCleanOrder')? 
      JSON.parse(localStorage.getItem('regularCleanOrder')):{
        bedroomNum:'',
        bathroomNum:'',
        type:'',
        address:{
          address1:'',
          address2:'',
          suburb:'',
          state:'',
          postcode:''
        },
        startTime:'',
        price:0,
      }
  }

}

function regularReducer(state = initialState,action) {
  switch (action.type) {

    // 1/3 GET regular order --dongyu
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

    // 2/3 POST regular order --dongyu
    case actionType.POST_REGULAR_REQUEST:
      return {
        ...state,
        loading: true,
        completeinfo:null
      }
  
    case actionType.POST_REGULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: action.postInSaga, // 发送给regular api
        completeinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init:[],
        error:action.errorInSaga,
      }

    // 3/3 POST endoflease order --dongyu
    case actionType.POST_ENDOFLEASE_REQUEST:
      return {
        ...state,
        loading: true,
        completeinfo:null
      }
  
    case actionType.POST_ENDOFLEASE_SUCCESS:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: action.postInSaga,
        completeinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_ENDOFLEASE_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init:[],
        error:action.errorInSaga,
      }


    // // 没啥用，不能跨页面取值，刷新会初始化。GET COMPLETE order --dongyu
    // case actionType.GET_COMPLETE_REQUEST:
    //   return {
    //     ...state,
    //     loading:true,
    //   }

    // case actionType.GET_COMPLETE_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     completeinfo: action.repos
    //   }

    // case actionType.COMPLETE_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     completeinfo: [],
    //     error:action.payload
    //     // error:action.data.err
    //   }

    default:
      return state
  }
}

export default regularReducer