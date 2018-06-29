import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { components } from './components';

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ...components,
        SharedModule
    ]
})
export class TodosSharedModule { }
