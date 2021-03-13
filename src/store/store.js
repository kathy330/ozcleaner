// Store：
// 当前的Redux应用程序状态存在于一个称为store的对象中。
// 该存储是通过传入一个reducer来创建的
// import { createStore, compose, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './reducers/index'   // 传入的Reducer
// import rootSaga from './sagas/rootSaga' // 传入的saga（API）

// // 法1:
// // const sagaMiddleware = createSagaMiddleware()
// // const store = compose(
// //   applyMiddleware(sagaMiddleware),
// //   window.devToolsExtension && window.devToolsExtension(),

// // )(createStore)(rootReducer)
// // sagaMiddleware.run(rootSaga)

// // 法2:（跟1比较就是没绑定chrom的devTools）用哪个都可以
// // const sagaMiddleware = createSagaMiddleware();
// // const middlewares = [sagaMiddleware];

// // const store = createStore(appReducer, applyMiddleware(...middlewares));
// // sagaMiddleware.run(rootSaga);
// export default store

// 旧的
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/index'
import rootSaga from './sagas/rootSaga'


const initialState = {}
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancers = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)


const store = createStore(
  reducers,
  initialState,
  enhancers
)

sagaMiddleware.run(rootSaga)

export default store