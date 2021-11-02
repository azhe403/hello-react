import React from "react";
import {TodoListItem} from "./TodoListItem";
import {TodoListProps} from "./TodoListProps";

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



