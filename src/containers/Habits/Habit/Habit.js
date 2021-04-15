import React from 'react';
import {categoryToIcon} from '../../../utility/CategoryIcon';

const Habit = (props) => {
    return (
        <li className="collection-item avatar valign-wrapper" 
            style={{margin: "2px 0px"}}
            onClick={() => props.click(props.habit)}>
            {categoryToIcon(props.habit.category)}
            <span className="title" style={{fontWeight: "bold"}}>{props.habit.title}</span>
            <span className="secondary-content">
                <i class="fa fa-edit brown-text" style={{fontSize: "24px"}}
                    onClick={(event) => props.edit(event, props.habit)}></i>
                &nbsp;&nbsp;
                <i className="material-icons black-text" 
                    onClick={(event) => props.delete(event, props.habit.id)}>delete</i>
            </span>
        </li>
    );
}
 
export default Habit;