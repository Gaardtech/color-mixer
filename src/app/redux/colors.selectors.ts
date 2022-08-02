import { createSelector } from "@ngrx/store";
import { AppState } from "../redux-types";

export const selectRed = (state: AppState) => state.colors.red;
export const selectGreen = (state: AppState) => state.colors.green;
export const selectBlue = (state: AppState) => state.colors.blue;

export const selectColorComboRgb =createSelector(
    selectRed,
    selectGreen,
    selectBlue,
    (red,green,blue) => `rgb(${red},${green},${blue})`,
);

const twoDigits = (str: string) => {
    return ('00' + str).slice(-2);
}

const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${twoDigits(r.toString(16))}${twoDigits(g.toString(16))}${twoDigits(b.toString(16))}`
};

export const selectColorComboHex =createSelector( 
    selectRed,
    selectGreen,
    selectBlue,
    (red,green,blue) => rgbToHex(red,green,blue),
);