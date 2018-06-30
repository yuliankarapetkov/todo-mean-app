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
                        map(payload => new authAction.SignInUserAnonymouslySuccess(payload))
                    );
            })
        );

    @Effect()
    signInUserAnonymouslySuccess$ = this.actions$
        .ofType(authAction.SIGN_IN_USER_ANONYMOUSLY_SUCCESS)
        .pipe(
            map(() => new fromRouter.Go({ path: ['/todos'] }))
        );

    @Effect()
    signOutUser$ = this.actions$
        .ofType(authAction.SIGN_OUT_USER)
        .pipe(
            map(() => new fromRouter.Go({ path: ['/auth'] }))
        );
}
