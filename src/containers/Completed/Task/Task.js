import React from 'react';
import {categoryToIcon} from '../../../utility/CategoryIcon';

const Task = (props) => {
    return (
        <li className="collection-item avatar left-align valign-wrapper" 
            style={{margin: "2px 0px"}}
            onClick={() => props.click(props.task)}>
            {categoryToIcon(props.task.category)}
            <span className="title" style={{fontWeight: "bold"}}>{props.task.title}</span>
            <span className="secondary-content red-text" style={{fontWeight: "bold"}}>
                {props.task.date}
            </span>
        </li>
    );
}
 
export default Task;