import {createStore,combineReducers,compose,applyMiddleware} from'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import uiReducer from './reducers/uiReducer'
import dataReducer from './reducers/dataReducer'


const initState={}
const middleware=[thunk]
const reducers =combineReducers({
    user: userReducer,
    UI:uiReducer,
    data:dataReducer
})
export const store= createStore(
    reducers,
    initState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
)