import Task from './Task';
import { useEffect, memo } from 'react';

export default memo(function List(props) {
    // console.log(props.initialTodos , 'tets');

    useEffect(() => {
        console.log("Render List");
    })
    return (
        <ul className="list-group">
            {
               props.initialTodos.map(el => {
                   return <Task  task={el.task} key={el.id} taskId={el.id} handleDelete={props.handleDelete}/>
               })
            }
        </ul>

    );

})