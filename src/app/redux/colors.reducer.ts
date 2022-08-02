import { state } from '@angular/animations';
import {ActionReducer, createReducer, on } from '@ngrx/store'
import {
    redUpdated,
    greenUpdated,
    blueUpdated,
    resetClicked
} from './colors.actions';
import { ColorsState, ColorsAction } from '../redux-types';

const initialState: ColorsState = {red: 0, green: 0, blue: 0}


export const colorsReducer: ActionReducer<ColorsState,ColorsAction> = createReducer(
    initialState,
    on(redUpdated, (state, {value}) => ({ ...state, red: value ,})),
    on(greenUpdated, (state, {value}) => ({ ...state, green: value,})),
    on(blueUpdated, (state, {value}) => ({ ...state, blue: value,})),
    on(resetClicked, () => initialState),
) 