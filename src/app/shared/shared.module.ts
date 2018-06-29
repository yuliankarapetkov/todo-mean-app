import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ...components,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
