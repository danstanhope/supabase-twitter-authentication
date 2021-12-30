import * as AuthActionTypes from '../constants/AuthActions';
import { supabase }  from '../helpers/supabase';

const user = supabase.auth.user();

const INITIAL_STATE = {
    isLoading: false,
    authUser: user,
    authError: null
};

const authReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case AuthActionTypes.SIGNIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AuthActionTypes.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: action.payload
            };
        case AuthActionTypes.SIGNIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                authUser: null,
                authError: action.err.message
            };
        case AuthActionTypes.SIGNOUT_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AuthActionTypes.SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: null
            };
        case AuthActionTypes.SIGNOUT_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default authReducer;
