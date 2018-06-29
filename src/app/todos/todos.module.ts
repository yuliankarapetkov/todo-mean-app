import { NgModule } from '@angular/core';

// Modules
import { TodosRoutingModule } from './todos-routing.module';
import { TodosSharedModule } from './shared/shared.module';

// Components
import { TodosComponent } from './todos.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

@NgModule({
    declarations: [
        TodosComponent
    ],
    imports: [
        TodosSharedModule,
        TodosRoutingModule,
        StoreModule.forFeature('todoManager', reducers),
        EffectsModule.forFeature(effects)
    ]
})
export class TodosModule { }
