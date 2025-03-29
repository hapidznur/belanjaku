import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    user: string;
    error: string;
    accessToken: string;
    success: boolean;
    isUserLogout: boolean;
}

const initialState: LoginState = {
    user: "",
    error: "",
    accessToken:"",
    success: false,
    isUserLogout: false
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess(state: LoginState, action: PayloadAction<string>) {
            state.user = action.payload;
            state.success = true;
            localStorage.setItem("authUser", JSON.stringify(action.payload));
        },
        loginError(state: LoginState, action: PayloadAction<string | any>) {
            state.error = action.payload;
            state.success = false;
        },
        logoutSuccess(state: LoginState, action: PayloadAction<boolean>) {
            state.isUserLogout = action.payload;
        }
    },
});

export const { loginSuccess, loginError, logoutSuccess } = loginSlice.actions;
export default loginSlice.reducer;
