import { state } from '@angular/animations';
import {ActionReducer, createReducer, on } from '@ngrx/store'
import {
    redUpdated,
    greenUpdated,
    blueUpdated,
    resetClicked,
    colorUpdated,
    colorAdded,
    colorDeleted
} from './colors.actions';
import { ColorsState, ColorsAction } from '../redux-types';
import { retry } from 'rxjs';

const initialState: ColorsState = [];


export const colorsReducer: ActionReducer<ColorsState,ColorsAction> = createReducer(
    initialState,
    on(colorUpdated, (state,{hex,value}) => {
        return state.map(color => color.hex === hex ? {hex,value} : color);
    } ),
    on(resetClicked, () => initialState),
    on(colorAdded, (state, {hex}) => {
        return state.concat({hex, value: 1})
    } ),
    on(colorDeleted, (state, {hex}) => {
        return state.filter(color => color.hex != hex);
    })
    
) 