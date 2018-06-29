import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { RequireAuthGuard } from './shared/guards/require-auth/require-auth.guard';
import { RequireUnauthGuard } from './shared/guards/require-unauth/require-unauth.guard';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        canActivate: [RequireUnauthGuard]
    },
    {
        path: 'todos',
        loadChildren: './todos/todos.module#TodosModule',
        canActivate: [RequireAuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
