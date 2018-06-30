import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

import * as fromServices from '../../../../shared/services';
import { Todo } from '../../models';

import { TodosSharedModule } from '../../shared.module';

import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: TodosSharedModule
})
export class TodosService {
    private readonly todosUrl = `${environment.apiUrl}/todos`;

    constructor(
        private database: AngularFireDatabase,
        private authService: fromServices.AuthService,
        private http: HttpClient
    ) { }

    getTodos(): Observable<any[]> {
        return this.http.get<any[]>(this.todosUrl);
    }

    addTodo(todo: Todo) {
        return this.http.post<any>(this.todosUrl, todo);
    }

    updateTodo(id: string, todo: Todo) {
        return this.http.put<any>(`${this.todosUrl}/${id}`, todo);
    }

    removeTodo(id: string) {
        return this.http.delete<any>(`${this.todosUrl}/${id}`);
    }
}
