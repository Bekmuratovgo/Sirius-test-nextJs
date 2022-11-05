import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import combine from "./combine/combine";

export const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch