import * as fromAuth from '../actions/auth.action';

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    tokenExpiresIn: Date;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    tokenExpiresIn: null
};

export function authReducer(state = initialState, action: fromAuth.AuthAction): AuthState {
    switch (action.type) {

        case fromAuth.SIGN_IN_USER_ANONYMOUSLY_SUCCESS: {
            const { token } = action.payload;
            return {
                ...state,
                isAuthenticated: true,
                token
            };
        }

        case fromAuth.SIGN_OUT_USER: {
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };
        }

    }

    return state;
}

export const getIsAuthenticated = (state: AuthState) => state.isAuthenticated;
