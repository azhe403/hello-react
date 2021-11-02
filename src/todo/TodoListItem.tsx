import React from "react";
import {TodoListItemProps} from "./TodoListItemProps";

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
