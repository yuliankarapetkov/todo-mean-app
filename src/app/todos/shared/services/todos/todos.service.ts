import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { TodosSharedModule } from '../../shared.module';
import { Todo } from '../../models';

@Injectable({
  providedIn: TodosSharedModule
})
export class TodosService {
    private readonly todosUrl = `${environment.apiUrl}/todos`;

    constructor(
        private http: HttpClient
    ) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<any[]>(this.todosUrl);
    }

    addTodo(todo: Todo) {
        return this.http.post<Todo>(this.todosUrl, todo);
    }

    updateTodo(id: string, todo: Todo) {
        return this.http.put<Todo>(`${this.todosUrl}/${id}`, todo);
    }

    removeTodo(id: string) {
        return this.http.delete(`${this.todosUrl}/${id}`);
    }
}
