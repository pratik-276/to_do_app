import React, { Component } from 'react';
import Habit from './Habit/Habit';

class Habits extends Component {
    state = {

    }
    render() { 
        return (
            <div class="container center">
                <ul class="collection with-header">
                    <li className="collection-header"><h3>HABITS</h3></li>
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                </ul>
                <button class="btn-large waves-effect waves-indigo white blue-text">
                    <i class="material-icons left">add</i>Add Habit</button>
            </div>
        );
    }
}
 
export default Habits;