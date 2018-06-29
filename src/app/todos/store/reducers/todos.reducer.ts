import * as fromTodos from '../actions/todos.action';
import { Todo } from '../../shared/models';

export interface TodosState {
    list: Todo[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: TodosState = {
    list: undefined,
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromTodos.TodosAction): TodosState {
    switch (action.type) {
        case fromTodos.LOAD_TODOS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromTodos.LOAD_TODOS_SUCCESS: {
            const list = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                list
            };
        }

        case fromTodos.LOAD_TODOS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getTodos = (state: TodosState) => state.list;
export const getTodosLoading = (state: TodosState) => state.loading;
export const getTodosLoaded = (state: TodosState) => state.loaded;
