
export interface ISavingItemsInBD {
    amount: number;
    value: string | number;
    increaseDecrease: number;
}

export interface IRandomedSortedItems {
    randomRes: string[] | number[],
    sortedRes: string[] | number[],
}

export type TInitialState = {
    amount: number | null,
    value: number | string | null,
    increaseDecrease: number | null,
    randomItems: IRandomedSortedItems | null,
    dragStartItem: string | number | null,
    inCorrectPlacedCoin: boolean | null,
}
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;