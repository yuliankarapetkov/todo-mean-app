import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from './store';

import { Todo } from './shared/models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'todos-root',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    todos$: Observable<Todo[]>;
    isLoading$: Observable<boolean>;

    constructor(
        private store: Store<fromStore.TodoManagerState>
    ) {}

    onAddTodo(todo: Todo) {
        this.store.dispatch(new fromStore.CreateTodo(todo));
    }

    onUpdateTodo(todo: Todo) {
        this.store.dispatch(new fromStore.UpdateTodo(todo));
    }

    onRemoveTodo(todo: Todo) {
        this.store.dispatch(new fromStore.RemoveTodo(todo));
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadTodos());

        this.todos$ = this.store.select(fromStore.getTodos);
        this.isLoading$ = this.store.select(fromStore.getTodosLoading);
    }
}
