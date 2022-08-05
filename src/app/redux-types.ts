export type ColorState = {hex: string, value: number};
export type ColorsState = ColorState[];

export interface AppState {
    colors: ColorsState,
}

export interface ColorsAction {
    type: string,
}

//testing Git 