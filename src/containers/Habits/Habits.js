import React, { Component } from 'react';
import Habit from './Habit/Habit';
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {habitValidator} from '../../utility/validators';
import Item from '../../components/Item/Item';
import $ from 'jquery';

class Habits extends Component {
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
        //true -> add , false -> update
        formState: true,
        valid: false,
        modalData: {
            title: "",
            description: "",
            category: ""
        }
    }
    componentWillMount(){
        this.props.getHabits();
    }
    componentDidMount(){
        let modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});
        M.FormSelect.init(document.getElementById('category'), {});
    }
    clearForm = () => {
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
            formState: true,
            valid: false,
            modalData: {
                title: "",
                description: "",
                category: ""
            }
        });
    }
    onTitleChange = (event) => {
        this.setState({
            title: {
                value: event.target.value,
                label: "active"
            },
            valid: habitValidator(event.target.value)
        });
    }
    onDescChange = (event) => {
        this.setState({description: {
            value: event.target.value,
            label: "active"
        }});
    }
    onCategoryChange = (event) => {
        this.setState({
            category: {
                value: event.target.value,
                label: "active"
            }
        });
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            title: this.state.title.value,
            description: this.state.description.value,
            category: this.state.category.value
        }
        if(this.state.formState){
            this.props.addHabit(data);
        }else{
            this.props.editHabit(data);
        }
        this.clearForm();
    }
    onEditHabit = (event, data) => {
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
            formState: false,
            valid: true
        });
        document.getElementById('openForm').click();
    }
    openElement = (data) => {
        this.setState({
            modalData: {
                title: data.title,
                description: data.description,
                category: data.category
            }
        });
        document.getElementById('openModal').click();
    }
    render() {
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>HABITS</h3></li>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} habit={habit} 
                                delete={(event, data) => {
                                    event.stopPropagation();
                                    this.props.deleteHabit(data);
                                }}
                                edit={this.onEditHabit}
                                click={this.openElement} />
                    ))}
                </ul>
                <div id="modal1" className="modal modal-fixed-footer">
                    <Item data={this.state.modalData} />
                </div>
                <button id="openModal" href="#modal1" className="modal-trigger" style={{
                    display: "none"
                }}></button>

                <div id="addhabit" className="modal modal-fixed-footer" 
                    style={{minHeight: "400px", outline: "none", padding: "20px 0px"}}>
                    <div className="modal-content">
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
                    </div>
                    <div className="modal-footer" style={{textAlign: "center"}}>
                        <a className="btn white blue-text waves-effect waves-red modal-action modal-close" 
                            onClick={this.onFormSubmit}
                            disabled={!this.state.valid}>{this.state.formState?"Add":"Update"}</a>
                        &nbsp;&nbsp;
                        <a className="btn red darken-4 white-text modal-close" onClick={this.clearForm}>Cancel</a>
                    </div>
                </div>
                <button id="openForm" href="#addhabit" className="btn-large white waves-effect waves-indigo blue-text modal-trigger" style={{marginBottom: "20px"}}>
                    <i className="material-icons left">add</i>Add Habit
                </button>
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