import { AppDispatch } from ".."
import { IRandomedSortedItems } from "../../interface"
import { 
    settingAmount, settingValue, settingIncreaseDecrease, settingRandomitems, settingDragStartItem, setInCorrectPlacedCoin
} from "../reducer/reducer"


export const setAmountAction = (val: number) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(settingAmount(val))
    }
}

export const setValueAction = (val: string | number) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(settingValue(val))
    }
}

export const setIncreaseDecreaseAction = (val: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(settingIncreaseDecrease(val))
    }
}

export const savingItemsInBD = (amount: number, value: string | number, increaseDecrease: number) => (dispatch: AppDispatch): void => {
    localStorage.setItem('amount', JSON.stringify(amount));
    localStorage.setItem('value', JSON.stringify(value));
    localStorage.setItem('increaseDecrease', JSON.stringify(increaseDecrease));
}

export const getItemsFromBD = () => (dispatch: AppDispatch):void => {
    const amount: number = JSON.parse(localStorage.getItem('amount') || '{}');
    const value: string | number = JSON.parse(localStorage.getItem('value') || '{}');
    const increaseDecrease: number = JSON.parse(localStorage.getItem('increaseDecrease') || '{}');
    
    dispatch(settingAmount(amount));
    dispatch(settingValue(value));
    dispatch(settingIncreaseDecrease(increaseDecrease));
};

export const setRandomedItems = (item: IRandomedSortedItems) => (dispatch: AppDispatch): void => {
    dispatch(settingRandomitems(item));
    localStorage.setItem('randomed', JSON.stringify(item));
};

export const getRandomedItemsFromBD = () => (dispatch: AppDispatch): void => {
    const randomed: IRandomedSortedItems = JSON.parse(localStorage.getItem('randomed') || '{}');
    dispatch(settingRandomitems(randomed));
}

export const setDragStartItem = (item: number | string) => (dispatch: AppDispatch): void => {    
    dispatch(settingDragStartItem(item));
}

export const isInCorrectPlacedCoin = (is: boolean) => async(dispatch: AppDispatch): Promise<void> => {
    dispatch(setInCorrectPlacedCoin(is));
}