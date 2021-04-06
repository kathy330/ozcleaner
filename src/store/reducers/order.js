/* eslint-disable */
import actionType from '../actions/actionTypes'

const initialState = {
  loading: false,
  updateing: false,
  loadingNum: 1,
  error: null,
  order: [],
  orders: [],
  row: 0,
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

function orderReducer(state = initialState, action) {
  switch (action.type) {

    // 1/3 GET regular order --dongyu
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

    // 2/3 Update regular order - dongyu
    case actionType.UPDATE_REGULAR_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actionType.UPDATE_REGULAR_SUCCESS:
      let orders = state.orders.result
      let order = [{ ...state.order[0], status: action.repos.status }]
      orders[state.row] = order[0]
      console.log([][0])
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

    case actionType.CHANGE_ORDER:
      return {
        ...state,
        order: [state.orders.result[action.payload]],
        row: action.payload
      }
    default:
      return state
  }
}

export default orderReducer