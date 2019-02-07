import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
// creation of store and implements of middleware and thunk.
const store = ()=> createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
	)
);

export default store;
