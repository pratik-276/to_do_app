import React from 'react';

const Habit = (props) => {
    return (
        <li className="collection-item avatar valign-wrapper" style={{margin: "2px 0px"}}>
            <i className="material-icons green circle">insert_chart</i>
            <span className="title" style={{fontWeight: "bold"}}>{props.habit.title}</span>
            <span className="secondary-content" style={{margin: "10px 0px"}}>
                <i className="material-icons green-text">done</i>
                <i className="material-icons red-text">close</i>
                <i className="material-icons black-text">delete</i>
            </span>
        </li>
    );
}
 
export default Habit;