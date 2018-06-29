import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer,
    auth: fromAuth.authReducer
};

export const getRouterState =  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;

        return { url, queryParams, params };
    }
}