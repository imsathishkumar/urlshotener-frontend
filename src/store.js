import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './reducers/loginreducers'
import { register, reset } from './userAction'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: register,
    userReset: reset
})

const userFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialstate = {
    user: {userInfo: userFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store