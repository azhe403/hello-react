import React from 'react';
import './App.css';
import {useTodoItems} from "./todo/UseTodoItems";
import {TodoList} from "./todo/TodoList";
import {TodoItem} from "./todo/TodoItem";
import {TodoItemsActionsTypes} from "./todo/TodoItemsActionsTypes";

function App() {
    let [input, setInput] = React.useState("");
    let [items, dispatchItems] = useTodoItems([
        {
            checked: false,
            text: "First todo"
        }
    ]);

    function handleCheck(item: TodoItem) {
        dispatchItems({
            action: TodoItemsActionsTypes.CHECK_ITEM,
            payload: item
        });

        setInput("");
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>Hello React!</h3>

                <h1>Todo List</h1>
                <div>
                    <input type="text" placeholder={"Create new todo"}
                           value={input}
                           onChange={event => setInput(event.currentTarget.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   dispatchItems({
                                       action: TodoItemsActionsTypes.ADD_ITEM,
                                       payload: {
                                           checked: false,
                                           text: input
                                       }
                                   });

                                   setInput("")
                               }
                           }}
                    />
                </div>

                <TodoList items={items} onCheck={handleCheck}/>

                {/*<img src={logo} className="App-logo" alt="logo"/>*/}


                {/*<p>*/}
                {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default App;
