import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootreducers from "./components/redux/reducers/main";
import { composeWithDevTools } from "redux-devtools-extension"
const middleware=[thunk]
const store=createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store