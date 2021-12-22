import { WhoIAm } from "../../services"
import { Dispatch } from "redux"

export const userActionsTypes = {
    signIn: 'sign_in',
    signUp: 'sign_up',
    whoIAm: 'who_i_am',
    userError: 'user_error'
}

export const WhoIAmAction = () => async (dispatch: Dispatch/**/) => {
    WhoIAm().then(({ data }) => {
        console.log("Data: " + JSON.stringify(data));
        dispatch({
            type: userActionsTypes.whoIAm,
            payload: data.data
        })
    }).catch((error) => {
        console.log("Fail!" + error);
        dispatch({
            type: userActionsTypes.userError,
            payload: console.log(error)
        });
    });
}