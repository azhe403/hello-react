import {TodoItem} from "./TodoItem";

export type TodoListProps = {
    items: TodoItem[];
    onCheck: (item: TodoItem) => void;
}
