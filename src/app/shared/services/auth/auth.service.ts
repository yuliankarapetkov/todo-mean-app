import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';

import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from '../../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class AuthService {
    constructor(
        private angularFire: AngularFireAuth
    ) { }

    get user() {
        return this.angularFire.auth.currentUser;
    }

    get isAuthenticaated() {
        return this.angularFire.authState.pipe(map(user => !!user));
    }

    signInAnonymously() {
        return fromPromise(this.angularFire.auth.signInAnonymously());
    }

    signOut() {
        return fromPromise(this.angularFire.auth.signOut());
    }
}
