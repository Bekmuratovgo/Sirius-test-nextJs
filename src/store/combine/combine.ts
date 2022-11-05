import {combineReducers} from "redux";
import {gameReducer} from "../reducer/reducer";

const combine = combineReducers({
    store: gameReducer,
})

export default combine;

export type State = ReturnType<typeof combine>