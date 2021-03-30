import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  loadingNum:1,
  error:null,
  repos_in_reducer_init: 'init value',
  completeinfo:{
    info: localStorage.getItem('endofleaseCleanOrder')? 
      JSON.parse(localStorage.getItem('endofleaseCleanOrder')):{
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

function endofleaseReducer(state = initialState,action) {
  switch (action.type) {

    // 1/2 GET end of lease order --dongyu
    case actionType.GET_ENDOFLEASE_REQUEST:
      return {
        ...state,
        loading:true
      }

    case actionType.GET_ENDOFLEASE_SUCCESS:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: action.repos
      }

    case actionType.GET_ENDOFLEASE_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: [],
        error:action.payload
        // error:action.data.err
    }


    // 2/2 POST endoflease order --dongyu
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
        loadingNum:2,
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
    default:
      return state
  }
}

export default endofleaseReducer