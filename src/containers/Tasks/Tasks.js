import React, { Component } from 'react';
import Task from './Task/Task';
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { taskValidator } from '../../utility/validators';
import Item from '../../components/Item/Item';

class Tasks extends Component {
    state = {
        id: "",
        title: {
            value: "",
            label: ""
        },
        description: {
            value: "",
            label: ""
        },
        category: {
            value: "task",
            label: "active"
        },
        date: {
            value: "",
            label: ""
        },
        time: {
            value: "",
            label: ""
        },
        formState: true,
        valid: false,
        modalData: {
            title: "",
            description: "",
            category: "",
            date: "",
            time: ""
        },
        completeData: {
            id: "",
            title: "",
            description: "",
            category: "",
            date: "",
            time: "",
            completed: "onTime",
            experience: "1",
            remarks: ""
        }
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
        let modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});
    }
    clearForm = () => {
        document.getElementById("addtask").style.display = "none";
        this.setState({
            id: "",
            title: {
                value: "",
                label: ""
            },
            description: {
                value: "",
                label: ""
            },
            category: {
                value: "task",
                label: "active"
            },
            date: {
                value: "",
                label: ""
            },
            time: {
                value: "",
                label: ""
            },
            formState: true,
            valid: false,
            modalData: {
                title: "",
                description: "",
                category: "",
                date: "",
                time: ""
            },
            completeData: {
                id: "",
                title: "",
                description: "",
                category: "",
                date: "",
                time: "",
                completed: "onTime",
                experience: "1",
                remarks: ""
            }
        });
    }
    onTitleChange = (event) => {
        const newState = {
            ...this.state,
            title: {
                value: event.target.value,
                label: "active"
            }
        };
        newState.valid = taskValidator(newState);
        this.setState(newState);
    }
    onDescChange = (event) => {
        const newState = {
            ...this.state,
            description: {
                value: event.target.value,
                label: "active"
            }
        };
        this.setState(newState);
    }
    onCategoryChange = (event) => {
        const newState = {
            ...this.state,
            category: {
                value: event.target.value,
                label: "active"
            }
        };
        this.setState(newState);
    }
    onDateChange = () => {
        const newState = {
            ...this.state,
            date: {
                value: document.getElementById("date").value,
                label: "active"
            }
        };
        newState.valid = taskValidator(newState);
        this.setState(newState);
    }
    onTimeChange = () => {
        const newState = {
            ...this.state,
            time: {
                value: document.getElementById("time").value,
                label: "active"
            }
        };
        this.setState(newState);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            title: this.state.title.value,
            description: this.state.description.value,
            category: this.state.category.value,
            date: this.state.date.value,
            time: this.state.time.value
        }
        if(this.state.formState){
            this.props.addTask(data);
        }else{
            this.props.editTask(data);
        }
        this.clearForm();
    }
    onEditTask = (event, data) => {
        event.stopPropagation();
        this.setState({
            id: data.id,
            category: {
                value: data.category,
                label: "active"
            },
            title: {
                value: data.title,
                label: "active"
            },
            description: {
                value: data.description,
                label: "active"
            },
            date: {
                value: data.date,
                label: "active"
            },
            time: {
                value: data.time,
                label: "active"
            },
            formState: false,
            valid: true
        });
        document.getElementById("addtask").style.display = "block";
    }
    openElement = (data) => {
        this.setState({
            modalData: {
                title: data.title,
                description: data.description,
                category: data.category,
                date: data.date,
                time: data.time
            }
        });
        document.getElementById('openModal1').click();
    }
    completeChange = (event) => {
        this.setState({
            completeData: {
                ...this.state.completeData,
                completed: event.target.value
            }
        });
    }
    completeTaskHandler = (event, data) => {
        event.stopPropagation();
        this.setState({
            completeData: {
                ...this.state.completeData,
                id: data.id,
                title: data.title,
                description: data.description,
                date: data.date,
                time: data.time,
                category: data.category
            }
        })
        document.getElementById('openModal2').click();
    }
    taskCompletedHandler = () => {
        this.props.taskComplete(this.state.completeData);
    }
    render() {
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>TASKS</h3></li>
                    {this.props.tasks.map(task => (
                        <Task key={task.id} task={task} 
                                delete={(event, id) => {
                                    event.stopPropagation();
                                    this.props.deleteTask(id);
                                }}
                                edit={this.onEditTask}
                                complete={this.completeTaskHandler}
                                clik={this.openElement} />
                    ))}
                </ul>
                <div id="modal1" className="modal modal-fixed-footer">
                    <Item data={this.state.modalData} />
                </div>
                <button id="openModal1" href="#modal1" className="modal-trigger" style={{
                    display: "none"
                }}></button>

                <div id="modal2" className="modal modal-fixed-footer">
                    <div class="container">
                        <h4><b>{this.state.completeData.title}</b></h4>
                        <p>{this.state.completeData.date}</p>
                        <div className="input-field">
                            <p className="left">The task was completed:</p> 
                            <select className="browser-default" id="completed" 
                                        value={this.state.completeData.completed}
                                        style={{
                                            width: "110px"
                                        }}
                                        onChange={this.completeChange}>
                                <option value="onTime">On Time</option>
                                <option value="beforeTime">Before Time</option>
                                <option value="afterTime">After Time</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button id="openModal2" href="#modal2" className="modal-trigger" style={{
                    display: "none"
                }}></button>

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
                            <input type="text" id="title" value={this.state.title.value}
                                onChange={this.onTitleChange} />
                            <label htmlFor="title" className={this.state.title.label}>Title</label>
                        </div>
                        <div className="input-field">
                            <textarea className="materialize-textarea" id="description" cols="30" rows="10" value={this.state.description.value}
                            onChange={this.onDescChange}></textarea>
                            <label htmlFor="description" className={this.state.description.label}>Description (optional)</label>
                        </div>
                        <div className="input-field">
                            <input type="text" className="datepicker" id="date"
                                value={this.state.date.value} />
                            <label htmlFor="date" className={this.state.date.label}>Choose a Date</label>
                        </div>
                        <div className="input-field">
                            <input type="text" className="timepicker" id="time"
                            value={this.state.time.value} />
                            <label htmlFor="time" className={this.state.time.label}>Choose a Time (optional)</label>
                        </div>
                        <div className="input-field">
                            <select className="browser-default" id="category" value={this.state.category.value} onChange={this.onCategoryChange}>
                                <option value="task">Task</option>
                                <option value="quit">Quit a Bad Habit</option>
                                <option value="meditation">Meditation</option>
                                <option value="study">Study</option>
                                <option value="nutrition">Nutrition / Diet</option>
                                <option value="health">Health</option>
                                <option value="exercise">Exercise</option>
                            </select>
                            <label htmlFor="category" className={this.state.category.label}>Select a category</label>
                        </div>
                    </form>
                    <a className="btn green white-text waves-effect waves-red" 
                        onClick={this.onFormSubmit}
                        disabled={!this.state.valid}>
                            {this.state.formState?"Add":"Update"}</a>&nbsp;
                    <a class="btn red white-text waves-effect waves-light" 
                        onClick={() => this.clearForm()}>Cancel</a>
                </div>
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