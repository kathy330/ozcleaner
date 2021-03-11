// Reducer：
// 接收state和action对象，决定如何在必要时更新状态，
// 并返回新的状态：(state, action) => newState。
// 您可以将reducer视为事件侦听器，该事件侦听器根据接收到的操作（事件）类型来处理事件。
import {combineReducers} from 'redux'
import regularReducer from './regular-reducer'

// 🎉 rootReduce会被store/store.js使用
const rootReducer = combineReducers({
    
  git_in_reducer_index:regularReducer

})
export default rootReducer



// 旧的
// import { combineReducers } from "redux";
// import orders from "./todo"
// export default combineReducers({
//     orders
// })