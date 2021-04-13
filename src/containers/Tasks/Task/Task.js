import React from 'react';
import {categoryToIcon} from '../../../utility/CategoryIcon';

const Task = (props) => {
    return (
        <li className="collection-item avatar left-align" style={{margin: "2px 0px"}}>
            {categoryToIcon(props.task.category)}
            <span className="title" style={{fontWeight: "bold"}}>{props.task.title}</span>
            <p>{props.task.date}</p>
            <span className="secondary-content" style={{margin: "10px 0px"}}>
                <i className="material-icons green-text">done</i>
                <i className="material-icons red-text" 
                    onClick={() => props.delete(props.task.id)}>delete</i>
            </span>
        </li>
    );
}
 
export default Task;