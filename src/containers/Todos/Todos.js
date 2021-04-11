import React, { Component } from 'react';
import Todo from './Todo/Todo';

class Todos extends Component {
    state = {

    }
    render() { 
        return (
            <div class="container">
                <ul class="collection with-header">
                    <li className="collection-header"><h3>Today's activities</h3></li>
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </ul>
            </div>
        );
    }
}
 
export default Todos;