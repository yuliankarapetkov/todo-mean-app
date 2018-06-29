import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTodos from './todos.reducer';

export interface TodoManagerState {
    todos: fromTodos.TodosState;
}

export const reducers: ActionReducerMap<TodoManagerState> = {
    todos: fromTodos.reducer
};

export const getTodoManagerState = createFeatureSelector<TodoManagerState>(
    'todoManager'
);