import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromTodos from '../reducers/todos.reducer';

export const getTodosState = createSelector(
    fromFeature.getTodoManagerState,
    (state: fromFeature.TodoManagerState) => state.todos
);

export const getTodosEntities = createSelector(getTodosState, fromTodos.getTodosEntities);
export const getTodosLoaded = createSelector(getTodosState, fromTodos.getTodosLoaded);
export const getTodosLoading = createSelector(getTodosState, fromTodos.getTodosLoading);

export const getTodos = createSelector(
    getTodosEntities,
    (entities) => Object.keys(entities).map(id => entities[id])
);
