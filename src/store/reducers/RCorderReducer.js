import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  updateing: false,
  loadingNum: 1,
  error: null,
  repos_in_reducer_init: "init value",
  completeinfo: {
    info: localStorage.getItem('regularCleanOrder') ?
      JSON.parse(localStorage.getItem('regularCleanOrder')) : {
        bedroomNum: '',
        bathroomNum: '',
        type: '',
        address: {
          address1: '',
          address2: '',
          suburb: '',
          state: '',
          postcode: ''
        },
        startTime: '',
        price: 0,
      }
  },
  updateData: 'no update' // 更新by id,可以更新任何值，只要有正确名字
}

function regularReducer(state = initialState, action) {
  switch (action.type) {

    // 1/3 GET regular order --dongyu
    case actionType.GET_REGULAR_REQUEST:
      return {
        ...state,
        loading: true,
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
        error: action.payload
        // error:action.data.err
      }

    // 2/3 Update regular order - dongyu
    case actionType.UPDATE_REGULAR_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionType.UPDATE_REGULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        updateData: action.repos,
        repos_in_reducer_init: [{ ...state.repos_in_reducer_init[0], status: action.repos.status }]
      }

    case actionType.UPDATE_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
        // error:action.data.err
      }

    // 3/3 POST regular order --dongyu
    case actionType.POST_REGULAR_REQUEST:
      return {
        ...state,
        loading: true,
        completeinfo: null
      }

    case actionType.POST_REGULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingNum: 2,
        repos_in_reducer_init: action.postInSaga, // 发送给regular api
        completeinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        repos_in_reducer_init: [],
        error: action.errorInSaga,
      }

    default:
      return state
  }
}

export default regularReducer