import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';

import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from '../../shared.module';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: SharedModule
})
export class AuthService {
    private readonly authUrl = `${environment.apiUrl}/auth`;

    constructor(
        private angularFire: AngularFireAuth,
        private http: HttpClient
    ) { }

    get user() {
        return this.angularFire.auth.currentUser;
    }

    get isAuthenticaated() {
        return this.angularFire.authState.pipe(map(user => !!user));
    }

    signInAnonymouslyOld() {
        return fromPromise(this.angularFire.auth.signInAnonymously());
    }

    signInAnonymously() {
        return this.http.post<any>(`${this.authUrl}/signup`, {});
    }

    signOut() {
        return fromPromise(this.angularFire.auth.signOut());
    }
}
