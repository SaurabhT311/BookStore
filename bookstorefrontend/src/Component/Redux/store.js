 import { createStore, combineReducers, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
 import bookReducer from './reducers/reducers'

 const reducers = combineReducers({
     Books: bookReducer
 })

 const store = createStore(reducers, (applyMiddleware(thunk)));


 export default store;