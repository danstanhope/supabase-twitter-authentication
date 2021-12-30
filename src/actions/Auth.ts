import { supabase } from '../helpers/supabase';
import * as AuthActionTypes from '../constants/AuthActions';

export const authObserver = () => (dispatch: any) => {
    supabase.auth.onAuthStateChange((_event, payload) => {

        if (payload) {
            dispatch({
                type: AuthActionTypes.SIGNIN_USER_SUCCESS,
                payload: payload.user
            });
        }
        else {
            dispatch({
                type: AuthActionTypes.SIGNOUT_USER_SUCCESS,
                payload: null
            });
        }
    });
};

export const signInAction = (user: any) => async (dispatch: any) => {
    dispatch({ type: AuthActionTypes.SIGNIN_USER_REQUEST });

    try {
        await supabase.auth.signIn({
            provider: 'twitter',
        }, {
            redirectTo: process.env.REACT_APP_SIGNIN_REDIRECT_URL
        });
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNIN_USER_ERROR,
            err
        });
    }
};

export const signOutAction = () => async (dispatch: any) => {
    dispatch({ type: AuthActionTypes.SIGNOUT_USER_REQUEST });
    try {
        await supabase.auth.signOut()
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNOUT_USER_ERROR,
            err
        });
    };
};
