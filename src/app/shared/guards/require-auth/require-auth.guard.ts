import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';

import * as fromStore from '../../../store';
import { SharedModule } from '../../shared.module';
import { filter } from 'rxjs/internal/operators';

@Injectable({
    providedIn: SharedModule
})
export class RequireAuthGuard implements CanActivate {
    constructor(private store: Store<fromStore.State>) { }

    canActivate() {
        return this.store.select(fromStore.getIsAuthenticated)
            .pipe(
                filter(isAuthenticated => isAuthenticated !== undefined),
                take(1),
                tap(isAuthenticated => {
                    if (!isAuthenticated) {
                        this.store.dispatch(new fromStore.Go({
                            path: ['/auth']
                        })) ;
                    }
                }),
            );
    }
}