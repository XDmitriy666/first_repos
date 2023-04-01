import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countReducer } from "./reducers/countReducer";
import { usersReducer } from "./reducers/usersReducers";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    count: countReducer,
    users: usersReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))