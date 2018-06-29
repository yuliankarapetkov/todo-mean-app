import { Action } from '@ngrx/store';

// sign in user anonymously
export const SIGN_IN_USER_ANONYMOUSLY = '[Auth] Sign In User Anonymously';

export class SignInUserAnonymously implements Action {
    readonly type = SIGN_IN_USER_ANONYMOUSLY;
}

// sign out user
export const SIGN_OUT_USER = '[Auth] Sign Out User';

export class SignOutUser implements Action {
    readonly type = SIGN_OUT_USER;
}

// get is authenticated
export const GET_IS_AUTHENTICATED = '[Auth] Get Is Authenticated';

export class GetIsAuthenticated implements Action {
    readonly type = GET_IS_AUTHENTICATED;
}

// set is authenticated
export const SET_IS_AUTHENTICATED = '[Auth] Set Is Authenticated';

export class SetIsAuthenticated implements Action {
    readonly type = SET_IS_AUTHENTICATED;
    constructor(public payload: boolean) {}
}

// action types
export type AuthAction =
    | SignInUserAnonymously
    | SignOutUser
    | GetIsAuthenticated
    | SetIsAuthenticated;
