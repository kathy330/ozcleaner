/* eslint-disable */
import actionType from '../actions/actionTypes'

// 这不是init
const dongyuPostOrder = {
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

const initialState = {
  loading: false,
  updateing: false,
  loadingNum: 1,
  error: null,
  payment:false,
  order: {}, //repos_in_reducer_init: "init value",
  orders: {'result':[],
            'count':0},
  row: 0,
  completeinfo: {
    info: localStorage.getItem('regularCleanOrder') ?
      JSON.parse(localStorage.getItem('regularCleanOrder')) : dongyuPostOrder
  },
  ECcompleteinfo: {
    info: localStorage.getItem('endofleaseCleanOrder') ?
      JSON.parse(localStorage.getItem('endofleaseCleanOrder')) : dongyuPostOrder
  },
  updateData: 'no update' // 更新by id,可以更新任何值，只要有正确名字
}

function orderReducer(state = initialState, action) {
  switch (action.type) {

    // 1/4 Pay order --dongyu
    case actionType.PAY_ORDER_SUCCESS:
      return {
        ...state,
        payment:true
      }

    // 2/4 GET regular order --
    case actionType.GET_ORDERr_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actionType.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.repos
      }

    case actionType.GET_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
        // error:action.data.err
      }

    // 3/4 Update regular order - 
    case actionType.UPDATE_REGULAR_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionType.UPDATE_REGULAR_SUCCESS:
      let orders = state.orders.result
      let order = { ...state.order, status: action.repos.status }
      orders[state.row] = order
      return {
        ...state,
        loading: false,
        updateData: action.repos,
        // order: action.postInSaga,
        order: order,
        orders:{...state.orders, result: orders}
      }

    case actionType.UPDATE_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
        // error:action.data.err
      }

    // 4/4 POST regular order --dongyu
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
        order: action.postInSaga, // 发送给regular api
        completeinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_REGULAR_FAILED:
      return {
        ...state,
        loading: false,
        order: [],
        error: action.errorInSaga,
      }

    // 5/5 POST endoflease order --dongyu
    case actionType.POST_ENDOFLEASE_REQUEST:
      return {
        ...state,
        loading: true,
        ECcompleteinfo: null
      }

    case actionType.POST_ENDOFLEASE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingNum: 2,
        order: action.postInSaga,
        ECcompleteinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_ENDOFLEASE_FAILED:
      return {
        ...state,
        loading: false,
        order: [],
        error: action.errorInSaga,
      }


    // 6/6
    case actionType.GET_ALL_ORDERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case actionType.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.orders
      }
    case actionType.GET_ALL_ORDERS_FAILED:
      return {
        ... state,
        loading: false,
        error: action.message
      }

    //7/7
    case actionType.CHANGE_ORDER:
      return {
        ...state,
        order: state.orders.result[action.payload],
        row: action.payload
      }
    default:
      return state
  }
}

export default orderReducer