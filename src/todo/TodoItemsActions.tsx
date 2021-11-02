import {TodoItemsActionsTypes} from "./TodoItemsActionsTypes";
import {TodoItem} from "./TodoItem";

export type TodoItemsActions = {
    action: TodoItemsActionsTypes;
    payload: TodoItem;
}
