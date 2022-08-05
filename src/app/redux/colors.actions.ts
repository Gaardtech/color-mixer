import {createAction,props} from '@ngrx/store'


export const colorUpdated = createAction('colors/colorUpdated', props<{hex: string,value: number}> ());
export const redUpdated = createAction('colors/redUpdated', props<{value: number}> ());
export const greenUpdated = createAction('colors/greenUpdated', props<{value: number}> ());
export const blueUpdated = createAction('colors/blueUpdated', props<{value: number}> ());
export const resetClicked = createAction('colors/resetClicked');
