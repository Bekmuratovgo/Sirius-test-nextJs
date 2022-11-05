
export const w = (val: string) => `width: ${val}`
export const h = (val: string) => `height: ${val}`

export const bg = (val: string) => `background: ${val}`;
export const radius = (val: string) => `border-radius: ${val}`;

export const mrTop = (val: string) => `margin-top: ${val}`;
export const mrBottom = (val: string) => `margin-bottom: ${val}`;

export const flex = `display: flex`;
export const justify = (val: string) => `justify-content: ${val}`;
export const align = (val: string) => `align-items: ${val}`;
export const direction = (val: string) => `flex-direction: ${val}`;

export const font = (val: string) => `font-family: ${val}`;
export const size = (val: string) => `font-size: ${val}`;
export const weight = (val: string) => `font-weight: ${val}`;


export const randomCoinPlace = (index: number): number => {
    if (index === 0) {
        return 120;
    } else if (index % 2 === 0) {
        return 100;
    } else {
        return 0;
    }
};