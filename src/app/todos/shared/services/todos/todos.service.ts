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
