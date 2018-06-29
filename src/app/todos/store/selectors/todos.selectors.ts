import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromTodos from '../reducers/todos.reducer';

export const getTodosState = createSelector(
    fromFeature.getTodoManagerState,
    (state: fromFeature.TodoManagerState) => state.todos
);

export const getTodos = createSelector(getTodosState, fromTodos.getTodos);
export const getTodosLoaded = createSelector(getTodosState, fromTodos.getTodosLoaded);
export const getTodosLoading = createSelector(getTodosState, fromTodos.getTodosLoading);
