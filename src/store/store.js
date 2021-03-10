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