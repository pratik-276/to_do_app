import React from 'react';

const Todo = () => {
    return (
        <li className="collection-item avatar green lighten-4">
            <i className="material-icons green circle">insert_chart</i>
            <span className="title" style={{fontWeight: "bold"}}>Dummy Text</span>
            <p>No description</p>
            <span className="secondary-content">
                <i className="material-icons green-text">done</i>
                <i className="material-icons red-text">close</i>
                <i className="material-icons black-text">delete</i>
            </span>
        </li>
    );
}
 
export default Todo;