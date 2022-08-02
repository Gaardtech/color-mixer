export interface ColorsState {
    red: number,
    green: number,
    blue: number,
}

export interface AppState {
    colors: ColorsState,
}

export interface ColorsAction {
    type: string,
}