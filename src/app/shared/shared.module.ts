import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        ...components,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class SharedModule { }
