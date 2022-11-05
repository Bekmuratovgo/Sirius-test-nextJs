import { setRandomedItems } from '../../store/action/action';

export function randomizer (amountVal, typeOfValue, typeOfSorting, dispatch) {
    const result = [];
    let sortedResult = null;
    const amount = amountVal;

    let abc = "abcdefghijklmnopqrstuvwxyz";
    let nums_0_9 = [];
    let nums_10_19 = [];
    let nums_20_50 = [];
    let nums_51_99 = [];
    let nums_100_999 = [];

    switch (typeOfValue) { //switch-определяет с каким массивом нам надо работать
        case 'A':
            generator(abc);//Сразу вызываем generator, так как у нас массив заполнен-(abc)
            break;
        case 9:
            fillingNumsArr(0, 9, nums_0_9)
            break;
        case 19:
            fillingNumsArr(10, 19, nums_10_19)
            break;
        case 50:
            fillingNumsArr(20, 50, nums_20_50)
            break;
        case 99:
            fillingNumsArr(51, 99, nums_51_99)
            break;
        case 999:
            fillingNumsArr(100, 999, nums_100_999)
            break;
    
        default:
            break;
    }

    function fillingNumsArr (from, to, whichArrWillFill) {
        for (let i = from; i <= to; i++) {
            whichArrWillFill.push(i);
        }
        generator(whichArrWillFill); // указан тот массив которого нужно рандомизировать
    }

    function generator (chosenArr) {
        while (result.length < amount) {
            let random = Math.floor(Math.random() * chosenArr.length);

            if (chosenArr === abc && !result.includes(chosenArr[random])) {
                result.push(chosenArr[random]);
            }
            else if (!result.includes(chosenArr[random])) {
                result.push(chosenArr[random]);
            }
        }
        sortedResult = [...result];
    }
    
    sortedResult && sortingResult (sortedResult);

    function sortingResult (arr) {
        if (typeOfValue === 'A' && typeOfSorting > 0) { // если это alphabet
            arr.sort();
        } else if (typeOfValue === 'A' && typeOfSorting < 0) {
            arr.sort().reverse()
        } else if (typeOfSorting > 0) {
            arr.sort((a, b) => a - b)
        } else {
             arr.sort((a, b) => b - a)
        }
    };
    dispatch(setRandomedItems({randomRes: result, sortedRes: sortedResult}));
    return {randomRes: result, sortedRes: sortedResult};
}

// export function randomizer (amountVal: number, typeOfValue: number | string, typeOfSorting: number) {

//     const result: [] = [];
//     let sortedResult = null;
//     const amount = amountVal;

//     let abc: string = "abcdefghijklmnopqrstuvwxyz";
//     let nums_0_9: [] = [];
//     let nums_10_19: [] = [];
//     let nums_20_50: [] = [];
//     let nums_51_99: [] = [];
//     let nums_100_999: [] = [];

//     switch (typeOfValue) { //switch-определяет с каким массивом нам надо работать
//         case 'A':
//             generator(abc);//Сразу вызываем generator, так как у нас массив заполнен-(abc)
//             break;
//         case 9:
//             fillingNumsArr(0, 9, nums_0_9)
//             break;
//         case 19:
//             fillingNumsArr(10, 19, nums_10_19)
//             break;
//         case 50:
//             fillingNumsArr(20, 50, nums_20_50)
//             break;
//         case 99:
//             fillingNumsArr(51, 99, nums_51_99)
//             break;
//         case 999:
//             fillingNumsArr(100, 999, nums_100_999)
//             break;
    
//         default:
//             break;
//     }

//     function fillingNumsArr (from: number, to: number, whichArrWillFill: number[]) {
//         for (let i = from; i <= to; i++) {
//             whichArrWillFill.push(i);
//         }
//         generator(whichArrWillFill); // указан тот массив которого нужно рандомизировать
//     }

//     function generator (chosenArr: number[] | string) {
//         while (result.length < amount) {
//             let random: number = Math.floor(Math.random() * chosenArr.length);
//             let chooseRandom = chosenArr[random];

//             if (chosenArr === abc && !result.includes(chooseRandom)) {
//                 result.push(chooseRandom);
//             } else {
//                 result.push(chooseRandom);
//             }
//             // else if (!result.includes(chooseRandom)) {
//             //     result.push(chooseRandom);
//             // }
//         }
//         sortedResult = [...result];
//     }
    
//     sortedResult && sortingResult (sortedResult);

//     function sortingResult (arr: number[]) {
//         if (typeOfValue === 'A' && typeOfSorting > 0) { // если это alphabet
//             arr.sort();
//         } else if (typeOfValue === 'A' && typeOfSorting < 0) {
//             arr.sort().reverse()
//         } else if (typeOfSorting > 0) {
//             arr.sort((a, b) => a - b)
//         } else {
//              arr.sort((a, b) => b - a)
//         }
//     }
//     return {randomRes: result, sortedRes: sortedResult};
// }
