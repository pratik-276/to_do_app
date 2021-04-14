import React, { Component } from 'react';
import Habit from './Habit/Habit';
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Habits extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        category: "",
        formState: true          //true -> add , false -> update
    }
    componentWillMount(){
        this.props.getHabits();
    }
    componentDidMount(){
        let modal = document.querySelector('.modal');
        M.Modal.init(modal, {
            onCloseStart: () => this.clearForm()
        });
        M.FormSelect.init(document.getElementById('category'), {});
    }
    clearForm = () => {
        this.setState({
            id: "",
            title: "",
            description: "",
            category: "",
            formState: true
        });
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
        if(this.state.formState){
            this.props.addHabit(this.state);
        }else{
            this.props.editHabit(this.state);
        }
        this.clearForm();
    }
    onEditHabit = (data) => {
        this.setState({
            id: data.id,
            category: data.category,
            title: data.title,
            description: data.description,
            formState: false
        });
        document.getElementById("openForm").click();
    }
    render() {
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>HABITS</h3></li>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} habit={habit} 
                                delete={this.props.deleteHabit}
                                edit={this.onEditHabit} />
                    ))}
                </ul>
                <button id="openForm" href="#addhabit" className="btn-large white waves-effect waves-indigo blue-text modal-trigger" style={{marginBottom: "20px"}}>
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
                                <select className="browser-default" id="category" value={this.state.category} onChange={this.onCategoryChange}>
                                    <option value="" disabled selected> Select a category</option>
                                    <option value="task">Task</option>
                                    <option value="quit">Quit a Bad Habit</option>
                                    <option value="meditation">Meditation</option>
                                    <option value="study">Study</option>
                                    <option value="nutrition">Nutrition / Diet</option>
                                    <option value="health">Health</option>
                                    <option value="exercise">Exercise</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer" style={{textAlign: "center"}}>
                        <a className="btn white blue-text waves-effect waves-red modal-action modal-close" 
                            onClick={this.onFormSubmit}>{this.state.formState?"Add":"Update"}</a>
                        &nbsp;&nbsp;
                        <a className="btn red darken-4 white-text modal-close" onClick={this.clearForm}>Cancel</a>
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
        deleteHabit: (id) => dispatch(actions.deleteHabit(id)),
        editHabit: (data) => dispatch(actions.editHabit(data))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Habits);