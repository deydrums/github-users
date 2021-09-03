//*******************Actions user ******************* */
import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishFetch, startFetch } from "./ui";


//startSearchUser ___________________________________________________________________________

export const startSearchUser = ({username}) => {
    return async(dispatch) => {
        dispatch(unsetUser())
        dispatch(startFetch());
        const resp = await fetchWithoutToken(`users/${username}`,'','GET');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            console.log(body)
            dispatch(setUser(body))
        }
    }
};

const setUser = (user) => ({
    type: types.userSetUser,
    payload: user
});

const unsetUser = () => ({
    type: types.userUnSetUser,
});