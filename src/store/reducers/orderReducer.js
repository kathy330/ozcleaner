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
  payment: false,
  order: {
    'result': [],
    'count': 0
  },
  test:1,
  row: 0,
  completeinfo: {
    info: localStorage.getItem('Order') ?
      JSON.parse(localStorage.getItem('Order')) : dongyuPostOrder
  },
  updateData: 'no update' // 更新by id,可以更新任何值，只要有正确名字
}

function orderReducer(state = initialState, action) {
  switch (action.type) {

    // 1/4 Pay order --dongyu
    case actionType.PAY_ORDER_SUCCESS:
      return {
        ...state,
        payment: true
      }

    // 2/4 GET regular order --
    case actionType.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actionType.GET_ORDER_SUCCESS:
      state.order.result = [action.repos]
      return {
        ...state,
        loading: false,
        row:0,
      }

    case actionType.GET_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
        // error:action.data.err
      }

    // 3/4 Update regular order - 
    case actionType.UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionType.UPDATE_ORDER_SUCCESS:
      let order = {...state.order.result[state.row], ...action.repos}
      state.order.result[state.row] = order
      return {
        ...state,
        loading: false,
        updateData: action.repos,
      }

    case actionType.UPDATE_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
        // error:action.data.err
      }

    // 4/4 POST regular order --dongyu
    case actionType.POST_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        completeinfo: null
      }

    case actionType.POST_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingNum: 2,
        order: action.postInSaga, // 发送给regular api
        completeinfo: action.postInSaga // 🔥存储到localstrage，被其他页面使用了
      }

    case actionType.POST_ORDER_FAILED:
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
        order: action.orders
      }
    case actionType.GET_ALL_ORDERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }

    //7/7
    case actionType.CHANGE_ORDER:
      return {
        ...state,
        row: action.payload
      }

    // 8/8 Submit reviews from users -- kangkang
    case actionType.SUBMIT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionType.SUBMIT_REVIEWS_SUCCESS:
      let ordersa = state.orders.result
      let ordera = { ...state.order, review: action.repos.review, rating: action.repos.rating }
      ordersa[state.row] = ordera

      return {
        ...state,
        loading: false,
        order: ordera,
        orders: { ...state.orders, result: ordersa }
      }

    case actionType.SUBMIT_REVIEWS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

      case actionType.UPDATE_ASSIGN_REQUEST:
        return {
          ...state,
          loading: true,
        }
  
      case actionType.UPDATE_ASSIGN_SUCCESS:
        return {
          ...state,
          loading: false,
          test:2,
          updateData: {status:"in-progress"},
        }
  
      case actionType.UPDATE_ASSIGN_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    default:
      return state
  }
}

export default orderReducer