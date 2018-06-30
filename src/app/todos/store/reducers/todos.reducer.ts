import * as fromTodos from '../actions/todos.action';
import { Todo } from '../../shared/models';

export interface TodosState {
    entities: { [id: string]: Todo };
    loaded: boolean;
    loading: boolean;
}

export const initialState: TodosState = {
    entities: {},
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
            const todos = action.payload,
                entities = todos.reduce((entitiesIn: { [id: number]: Todo }, todo: Todo) => {
                return {
                    ...entitiesIn,
                    [todo._id]: todo
                };
            }, {
                ...state.entities
            });

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }

        case fromTodos.LOAD_TODOS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case fromTodos.CREATE_TODO_SUCCESS:
        case fromTodos.UPDATE_TODO_SUCCESS: {
            const todo = action.payload,
                entities = {
                    ...state.entities,
                    [todo._id]: todo
                };

            return {
                ...state,
                entities
            };
        }

        case fromTodos.REMOVE_TODO_SUCCESS: {
            const todo = action.payload,
                { [todo._id]: removedTodo, ...entities } = state.entities;

            return {
                ...state,
                entities
            };
        }
    }

    return state;
}

export const getTodosEntities = (state: TodosState) => state.entities;
export const getTodosLoading = (state: TodosState) => state.loading;
export const getTodosLoaded = (state: TodosState) => state.loaded;
