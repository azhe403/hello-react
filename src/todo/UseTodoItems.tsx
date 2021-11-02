import {useReducer} from "react";
import {TodoItem} from "./TodoItem";
import {TodoItemsActionsTypes} from "./TodoItemsActionsTypes";
import {TodoItemsActions} from "./TodoItemsActions";

export function useTodoItems(defaultItems: TodoItem[]) {
    function reducer(state: TodoItem[], action: TodoItemsActions) {
        switch (action.action) {
            case TodoItemsActionsTypes.ADD_ITEM:
                return state.concat(action.payload);
            case TodoItemsActionsTypes.CHECK_ITEM:
                action.payload.checked = true;
                return [...state];
            default:
                return state;
        }
    }

    return useReducer(reducer, defaultItems);
}
