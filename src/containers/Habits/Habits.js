import React, { Component } from 'react';
import Habit from './Habit/Habit';
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Habits extends Component {
    state = {
        title: "",
        description: "",
        category: "task"
    }
    componentDidMount(){
        let modal = document.querySelector('.modal');
        M.Modal.init(modal, {});
        M.FormSelect.init(document.querySelectorAll('select'), {});
    }
    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }
    onDescChange = (event) => {
        this.setState({description: event.target.value});
    }
    onCategoryChange = (event) => {
        this.setState({category: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addHabit(this.state);
    }
    componentWillMount(){
        this.props.getHabits();
    }
    render() {
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>HABITS</h3></li>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} habit={habit} 
                                delete={this.props.deleteHabit} />
                    ))}
                </ul>
                <button href="#addhabit" className="btn-large waves-effect waves-indigo white blue-text modal-trigger" style={{marginBottom: "20px"}}>
                    <i className="material-icons left">add</i>Add Habit
                </button>
                <div id="addhabit" className="modal modal-fixed-footer" 
                    style={{minHeight: "400px", outline: "none", padding: "20px 0px"}}>
                    <div className="modal-content">
                        <form>
                            <div className="input-field">
                                <input type="text" id="title" value={this.state.title}
                                        onChange={this.onTitleChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field">
                                <textarea className="materialize-textarea" id="description" cols="30" rows="10" value={this.state.description}
                                onChange={this.onDescChange}></textarea>
                                <label htmlFor="description">Description (optional)</label>
                            </div>
                            <div className="input-field">
                                <select id="category" value={this.state.category}
                                    onChange={this.onCategoryChange}>
                                    <option value="task">Task</option>
                                    <option value="quit">Quit a Bad Habit</option>
                                    <option value="meditation">Meditation</option>
                                    <option value="study">Study</option>
                                    <option value="nutrition">Nutrition / Diet</option>
                                    <option value="health">Health</option>
                                    <option value="exercise">Exercise</option>
                                </select>
                                <label htmlFor="category">Select Category</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer" style={{textAlign: "center"}}>
                        <a className="btn white blue-text waves-effect waves-red modal-action modal-close" onClick={this.onFormSubmit}>Submit</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        habits: state.habit.habits
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getHabits: () => dispatch(actions.getHabit()),
        addHabit: (data) => dispatch(actions.addHabit(data)),
        deleteHabit: (id) => dispatch(actions.deleteHabit(id))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Habits);