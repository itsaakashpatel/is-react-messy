import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ ...reducers }) 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const env = process.env.REACT_APP_ENV;
const middlewares = []
const composeEnhancers =
  env !== "prod" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      })
    : compose;

// const store = createStore(
//   combineReducers({
//   ...reducers
//   }),
//   composeEnhancers(applyMiddleware(...middlewares))
// );

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)))
let persistor = persistStore(store)

export { store, persistor}
