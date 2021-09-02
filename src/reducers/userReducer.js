//******************* userReducer ******************* */

import { types } from "../types/types";


const initialState = {
    user: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.userSetUser:
            return{
                ...state,
                user: action.payload
            }

        case types.userUnSetUser:
            return{
                ...state,
                user: initialState.user
            }

        default:
            return state;
    }
}