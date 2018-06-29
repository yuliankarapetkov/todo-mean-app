import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isAuthenticated$: Observable<boolean>;

    constructor(
        private store: Store<fromStore.State>
    ) {}

    onSignOutClicked() {
        this.store.dispatch(new fromStore.SignOutUser());
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.GetIsAuthenticated());
        this.isAuthenticated$ = this.store.select(fromStore.getIsAuthenticated);
    }
}
