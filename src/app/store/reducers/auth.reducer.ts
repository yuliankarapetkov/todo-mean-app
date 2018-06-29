import * as fromAuth from '../actions/auth.action';

export interface AuthState {
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    isAuthenticated: undefined
};

export function authReducer(state = initialState, action: fromAuth.AuthAction): AuthState {
    switch (action.type) {

        case fromAuth.SET_IS_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: action.payload
            };
        }

    }

    return state;
}

export const getIsAuthenticated = (state: AuthState) => state.isAuthenticated;
