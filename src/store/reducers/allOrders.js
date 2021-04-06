// import actionTypes from '../actions/actionTypes'

// const initialSate = {
//   orders: [],
//   loading: false,
//   error: null,
// }

// function orders( state = initialSate, action ) {
//   switch(action.type){
//     case actionTypes.GET_ALL_ORDERS_REQUESTED:
//       return {
//         ...state,
//         loading: true
//       }
//     case actionTypes.GET_ALL_ORDERS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         orders: action.orders
//       }
//     case actionTypes.GET_ALL_ORDERS_FAILED:
//       return {
//         ... state,
//         loading: false,
//         error: action.message
//       }
//     default:
//       return state
//   }
// }

// export default orders