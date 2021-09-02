//*******************Actions user ******************* */
import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";


//errors msg ___________________________________________________________________________

export const startSearchUser = ({user}) => {
    return async(dispatch) => {
        dispatch(unsetUser())
        //dispatch(startFetch());
        const resp = await fetchWithoutToken(`users/${user}`,'','GET');
        const body = await resp.json();
        //dispatch(finishFetch());
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