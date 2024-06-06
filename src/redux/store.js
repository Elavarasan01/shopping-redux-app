import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;