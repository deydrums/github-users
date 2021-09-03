//******************* uiReducer ******************* */


import { types } from "../types/types";


const initialState = {
    fetch: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.uiSetFetch:
            return{
                ...state,
                fetch: true
            }

        case types.uiRemoveFetch:
            return{
                ...state,
                fetch: false
            }

        default:
            return state;
    }
}