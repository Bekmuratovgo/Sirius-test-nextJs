import { IRandomedSortedItems, TInitialState } from "../../interface";

const AMOUNT: string = 'AMOUNT';
const VALUE: string = 'VALUE';
const INCREASE_DECREASE: string = 'INCREASE_DECREASE';
const RANDOM_ITEMS: string = 'RANDOM_ITEMS';
const SET_DRAGSTART_ITEM: string = 'SET_DRAGSTART_ITEM';
const INCORRECT_PLACED_COIN: string = 'INCORRECT_PLACED_COIN';

interface IAction {
    type: string,
    payload: number | string | boolean | IRandomedSortedItems,
};

const initialState: TInitialState = {
    amount: null,
    value: null,
    increaseDecrease: null,
    randomItems: null,
    dragStartItem: null,
    inCorrectPlacedCoin: null,
}

export const gameReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case AMOUNT:
            return {...state, amount: action.payload}
        case VALUE:
            return {...state, value: action.payload}
        case INCREASE_DECREASE:
            return {...state, increaseDecrease: action.payload}
        case RANDOM_ITEMS:
            return {...state, randomItems: action.payload}
        case SET_DRAGSTART_ITEM:
            return {...state, dragStartItem: action.payload}
        case INCORRECT_PLACED_COIN:
            return {...state, inCorrectPlacedCoin: action.payload}
        default:
            return state;
    }
}

export const settingAmount = (payload: number) => ({type: AMOUNT, payload})
export const settingValue = (payload: string | number) => ({type: VALUE, payload})
export const settingIncreaseDecrease = (payload: number) => ({type: INCREASE_DECREASE, payload})
export const settingRandomitems = (payload: IRandomedSortedItems) => ({type: RANDOM_ITEMS, payload})
export const settingDragStartItem = (payload: number | string) => ({type: SET_DRAGSTART_ITEM, payload})
export const setInCorrectPlacedCoin = (payload: boolean) => ({type: INCORRECT_PLACED_COIN, payload})


