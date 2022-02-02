import React, { useEffect, memo } from 'react';

export default memo(function Task(props) {

    useEffect(() => {
        console.log("Render List ... asf");
    })

    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                  {props.task}
              </span>
              <button className="btn btn-danger" onClick={() => {props.handleDelete(props.taskId)}}>x</button>
            </li>
            
        </ul>
    );
})