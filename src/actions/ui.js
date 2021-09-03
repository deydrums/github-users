import { types } from "../types/types";

//fetch ___________________________________________________________________________

export const startFetch = () =>({
    type: types.uiSetFetch
});

export const finishFetch = () =>({
    type: types.uiRemoveFetch
});