import { createContext, useState, useEffect } from 'react';
import placeholder from '../API/placeholder';

export const TodoListContext = createContext();

export const TodoListContextProvider = props => {

    const [todoList, setTodoList ] = useState(null);

    useEffect(() => {
        placeholder.get('/todos/')
        .then(resp => {
            setTodoList(resp.data.map(todo => {
                return  {...todo, task : todo.title}
            }));
            console.log(todoList);
        })
        .catch(err => console.log(err))
    }, [])
  
    return  <TodoListContext.Provider value={ {todoList, setTodoList}}>
                {todoList && props.children}
            </TodoListContext.Provider>
}