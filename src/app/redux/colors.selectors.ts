import { createSelector, State } from "@ngrx/store";
import { map } from "rxjs";
import { AppState } from "../redux-types";

const twoDigits = (str: string) => {
    return ('00' + str).slice(-2);
}

const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${twoDigits(r.toString(16))}${twoDigits(g.toString(16))}${twoDigits(b.toString(16))}`
};

const hexToRgb = (hex: string) => {
    const [rhex, ghex, bhex] = hex.substring(1).match(/.{2}/g) as string[];
    return{
        r: parseInt(rhex,16),
        g: parseInt(ghex,16),
        b: parseInt(bhex,16),
    };
};

export const selectColorComboHex = (state: AppState) => {
    const colors = state.colors;

    if (colors.length === 0){
        return '#000000';
    }

    const totalStrengthValue = colors
    .map(color => color.value)
    .reduce((sum,x) => sum + x);

    const rgbColors = colors.map(color => ({
        ...hexToRgb(color.hex),
        value: color.value,
    }));

    const  rgbTotal = rgbColors.reduce((rgbSum,color) => ({
        r: rgbSum.r + color.r * color.value,
        g: rgbSum.g + color.g * color.value,
        b: rgbSum.b + color.b * color.value,
    }),{r: 0, g: 0, b: 0});

    const rgbAverage = {
        r: Math.floor(rgbTotal.r / totalStrengthValue),
        g: Math.floor(rgbTotal.g / totalStrengthValue),
        b: Math.floor(rgbTotal.b / totalStrengthValue),
    }

    return rgbToHex(rgbAverage.r,rgbAverage.g,rgbAverage.b);

};