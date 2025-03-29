import { postFakeLogin } from "helpers/fakebackend_helper";
import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";
import { getFirebaseBackend } from "helpers/firebase_helper";
import { supabase } from "helpers/supabase_client";

interface User {
    email: string;
    password: string;
}

export const loginUser = (
    user: User,
    history: any
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        let response: any;
        if (process.env.REACT_APP_DEFAULTAUTH === "fake") {

            response = await postFakeLogin({
                email: user.email,
                password: user.password,
            });

            localStorage.setItem("authUser", JSON.stringify(response));

        } else if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            let fireBaseBackend = await getFirebaseBackend();

            response = await fireBaseBackend.loginUser(
                user.email,
                user.password
            )
        } else if (process.env.REACT_APP_DEFAULTAUTH === "supabase") {
            response = await supabase.auth.signInWithPassword({
                email: user.email,
                password: user.password,
            });
            
            if (response.error) {
                dispatch(loginError(response.error));
                return;
            }
        }

        if (response) {
            dispatch(loginSuccess(response));
            history("/dashboard");
            console.log("Login response", response);
        }
    } catch (error) {

        dispatch(loginError(error));
    }
};

export const logoutUser = () => async (dispatch: Dispatch) => {
    try {
        localStorage.removeItem("authUser");

        let fireBaseBackend = await getFirebaseBackend();

        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = fireBaseBackend.logout;
            dispatch(logoutSuccess(response));
        } else {
            dispatch(logoutSuccess(true));
        }
    } catch (error) {
        dispatch(loginError(error));
    }
}


export const socialLogin = (type: any, history: any) => async (dispatch: any) => {
    try {
        let response: any;

        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const fireBaseBackend = getFirebaseBackend();
            response = fireBaseBackend.socialLoginUser(type);
        }

        const socialData = await response;

        if (socialData) {
            sessionStorage.setItem("authUser", JSON.stringify(socialData));
            dispatch(loginSuccess(socialData));
            history('/dashboard');
        }

    } catch (error) {
        dispatch(loginError(error));
    }
}