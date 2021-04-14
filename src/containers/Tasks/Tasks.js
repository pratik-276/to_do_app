import React, { Component } from 'react';
import Task from './Task/Task';
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Tasks extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        time: "",
        formState: true
    }
    componentWillMount(){
        this.props.getTasks();
    }
    componentDidMount(){
        M.FormSelect.init(document.querySelectorAll('select'), {});
        M.Datepicker.init(document.querySelector('.datepicker'), {
            autoClose: true,
            onClose: this.onDateChange
        });
        M.Timepicker.init(document.querySelector('.timepicker'), {
            autoClose: true,
            onCloseEnd: this.onTimeChange
        });
    }
    clearForm = () => {
        document.getElementById("addtask").style.display = "none";
        this.setState({
            id: "",
            title: "",
            description: "",
            date: "",
            time: "",
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
    onDateChange = () => {
        this.setState({date: document.getElementById("date").value});
    }
    onTimeChange = () => {
        this.setState({time: document.getElementById("time").value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.formState){
            this.props.addTask(this.state);
        }else{
            this.props.editTask(this.state);
        }
        this.clearForm();
    }
    onEditTask = (data) => {
        this.setState({
            id: data.id,
            category: data.category,
            title: data.title,
            description: data.description,
            date: data.date,
            time: data.time,
            formState: false
        });
        document.getElementById("addtask").style.display = "block";
    }
    render() {
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>TASKS</h3></li>
                    {this.props.tasks.map(task => (
                        <Task key={task.id} task={task} 
                                delete={this.props.deleteTask}
                                edit={this.onEditTask}
                                complete={this.props.taskComplete} />
                    ))}
                </ul>
                <button className="btn-large waves-effect waves-yellow white red-text"
                    style={{marginBottom: "30px"}}
                    onClick={() => {document.getElementById("addtask").style.display = "block"}}>
                    <i className="material-icons left">add</i>Add Task
                </button>

                <div id="addtask" className="container" style={{
                    display: "none",
                    minHeight: "400px", 
                    outline: "none",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <form>
                        <div className="input-field">
                            <input type="text" id="title" value={this.state.title}
                                onChange={this.onTitleChange} placeholder="Title" />
                        </div>
                        <div className="input-field">
                            <textarea className="materialize-textarea" id="description" cols="30" rows="10" value={this.state.description}
                            onChange={this.onDescChange} placeholder="Description (optional)"></textarea>
                        </div>
                        <div className="input-field">
                            <input type="text" className="datepicker" id="date"
                                value={this.state.date} placeholder="Choose a Date" />
                        </div>
                        <div className="input-field">
                            <input type="text" className="timepicker" id="time"
                            value={this.state.time} placeholder="Choose a Time (optional)" />
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
                    <a className="btn green white-text waves-effect waves-red" onClick={this.onFormSubmit}>{this.state.formState?"Add":"Update"}</a>&nbsp;
                    <a class="btn red white-text waves-effect waves-light" 
                        onClick={() => this.clearForm()}>Cancel</a>
                </div>
                <div style={{marginTop: "20px"}}></div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        tasks: state.task.tasks
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getTasks: () => dispatch(actions.getTasks()),
        addTask: (data) => dispatch(actions.addTask(data)),
        deleteTask: (id) => dispatch(actions.deleteTask(id)),
        editTask: (data) => dispatch(actions.editTask(data)),
        taskComplete: (data) => dispatch(actions.completeTask(data))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Tasks);