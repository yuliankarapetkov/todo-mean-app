import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    constructor(
        private store: Store<fromStore.State>
    ) {}

    signInAnonymously() {
        this.store.dispatch(new fromStore.SignInUserAnonymously());
    }

    ngOnInit() {
    }
}
