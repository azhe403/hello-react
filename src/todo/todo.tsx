import {useReducer} from "react";

export type TodoItem = {
    text: String;
    checked: boolean;
}

export enum TodoItemsActionsTypes {
    ADD_ITEM = "TODO/ITEMS/ADD_ITEM",
    CHECK_ITEM = "TODO/ITEMS/CHECK_ITEM"
}

export type TodoItemsActions = {
    action: TodoItemsActionsTypes;
    payload: TodoItem;
}

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
