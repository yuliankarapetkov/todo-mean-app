import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';
import * as fromRouter from '../actions/router.action';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: fromServices.AuthService
    ) {}

    @Effect()
    signInUserAnonymously$ = this.actions$
        .ofType(authAction.SIGN_IN_USER_ANONYMOUSLY)
        .pipe(
            switchMap(() => {
                return this.authService
                    .signInAnonymously()
                    .pipe(
                        map(() => new authAction.GetIsAuthenticated()),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    signOutUser$ = this.actions$
        .ofType(authAction.SIGN_OUT_USER)
        .pipe(
            switchMap(() => {
                return this.authService
                    .signOut()
                    .pipe(
                        map(() => new authAction.GetIsAuthenticated()),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    getIsAuthenticated$ = this.actions$
        .ofType(authAction.GET_IS_AUTHENTICATED)
        .pipe(
            switchMap(() => {
                return this.authService
                    .isAuthenticaated
                    .pipe(
                        map((isAuthenticated: boolean) => new authAction.SetIsAuthenticated(isAuthenticated)),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    setIsAuthenticated$ = this.actions$
        .ofType(authAction.SET_IS_AUTHENTICATED)
        .pipe(
            map((action: authAction.SetIsAuthenticated) => action.payload),
            map(isAuthenticated => {
               if (isAuthenticated) {
                   return new fromRouter.Go({
                       path: ['/todos']
                   });
               }  else {
                   return new fromRouter.Go({
                       path: ['/auth']
                   });
               }
            })
        );
}
