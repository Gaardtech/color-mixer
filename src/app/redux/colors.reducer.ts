import { state } from '@angular/animations';
import {ActionReducer, createReducer, on } from '@ngrx/store'
import {
    redUpdated,
    greenUpdated,
    blueUpdated,
    resetClicked,
    colorUpdated
} from './colors.actions';
import { ColorsState, ColorsAction } from '../redux-types';

const initialState: ColorsState = [{ hex: '#bada55' , value: 1}];


export const colorsReducer: ActionReducer<ColorsState,ColorsAction> = createReducer(
    initialState,
    on(colorUpdated, (state,{hex,value}) => {
        return state.map(color => color.hex === hex ? {hex,value} : color);
    } ),
    on(resetClicked, () => initialState),
    on(redUpdated, (state, {value}) => ({ ...state, red: value ,})),
    on(greenUpdated, (state, {value}) => ({ ...state, green: value,})),
    on(blueUpdated, (state, {value}) => ({ ...state, blue: value,})),
    
) 