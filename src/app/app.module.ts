import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

// Store
import { CustomSerializer, reducers } from './store/reducers';
import { effects } from './store/effects';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['auth'],
        rehydrate: true
    })(reducer);
}

const metaReducers: MetaReducer<any>[] = !environment.production
    ? [localStorageSyncReducer, storeFreeze]
    : [localStorageSyncReducer];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        // Store
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],

        // Custom
        AppRoutingModule,
        SharedModule,
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
