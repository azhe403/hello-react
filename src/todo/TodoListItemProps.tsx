import {TodoItem} from "./TodoItem";

export type TodoListItemProps = {
    item: TodoItem;
    onCheck: (item: TodoItem) => void;
}
