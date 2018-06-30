import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { switchMap, take } from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromStore.State>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.store.select(fromStore.getToken)
            .pipe(
                take(1),
                switchMap(token => {
                    const authRequest = req.clone({
                        headers: req.headers.set('Authorization', 'Bearer ' + token)
                    });

                    return next.handle(authRequest);
                })
            );
    }
}
