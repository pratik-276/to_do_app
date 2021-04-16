import React from 'react';
import {categoryToIcon} from '../../../utility/CategoryIcon';

const Task = (props) => {
    return (
        <li className="collection-item avatar left-align" 
            style={{margin: "2px 0px"}}
            onClick={() => props.clik(props.task)}>
            {categoryToIcon(props.task.category)}
            <span className="title" style={{fontWeight: "bold"}}>
                {props.task.title}
            </span>
            <p>{props.task.date}</p>
            <span className="secondary-content">
                <i className="material-icons green-text"
                    onClick={(event) => props.complete(event, props.task)}>done</i>&nbsp;&nbsp;
                <i class="fa fa-edit brown-text" style={{fontSize: "22px"}}
                    onClick={(event) => props.edit(event, props.task)}></i>
                &nbsp;&nbsp;
                <i className="material-icons red-text" 
                    onClick={(event) => props.delete(event, props.task.id)}>delete</i>
            </span>
        </li>
    );
}
 
export default Task;