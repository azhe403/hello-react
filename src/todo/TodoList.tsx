import {TodoItem} from "./todo";
import React from "react";

type TodoListProps = {
    items: TodoItem[];
    onCheck: (item: TodoItem) => void;
}

type TodoListItemProps = {
    item: TodoItem;
    onCheck: (item: TodoItem) => void;
}

export function TodoListItem(props: TodoListItemProps) {
    const {item, onCheck} = props;
    const handleCheck = React.useCallback(() => onCheck(item), [onCheck, item]);

    return (
        <li>
            <input type={"checkbox"} onChange={handleCheck}/>
            {item.text}
        </li>
    )
}

export function TodoList(props: TodoListProps) {
    const {items, onCheck} = props;

    return (
        <ul className="todo-list">
            {items.map((item, index) =>
                item.checked ? null : (
                    <TodoListItem key={index} item={item} onCheck={onCheck}/>
                )
            )}
        </ul>
    )
}



