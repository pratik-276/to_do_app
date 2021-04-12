import React, { Component } from 'react';
import Habit from './Habit/Habit';
import M from 'materialize-css/dist/js/materialize.min.js';
import ReactDOM from 'react-dom';

class Habits extends Component {
    state = {

    }
    componentDidMount(){
        let modal = document.querySelector('.modal');
        M.Modal.init(modal, {});
        M.FormSelect.init(document.querySelectorAll('select'), {});
    }
    render() { 
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>HABITS</h3></li>
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                </ul>
                <button href="#addhabit" className="btn-large waves-effect waves-indigo white blue-text modal-trigger" style={{marginBottom: "20px"}}>
                    <i className="material-icons left">add</i>Add Habit
                </button>
                <div id="addhabit" className="modal" style={{height: "100%", outline: "none"}}>
                    <div className="modal-content">
                        <form>
                            <div className="input-field">
                                <input type="text" id="title" />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="input-field">
                                <textarea className="materialize-textarea" id="description" cols="30" rows="10"></textarea>
                                <label htmlFor="description">Description (optional)</label>
                            </div>
                            <div className="input-field">
                                <select id="category">
                                    <option value="task">Task</option>
                                    <option value="meditation">Meditation</option>
                                    <option value="study">Study</option>
                                    <option value="health">Health</option>
                                </select>
                                <label htmlFor="category">Select Category</label>
                            </div>
                            <a className="btn white blue-text waves-effect waves-red modal-action modal-close">Submit</a>
                        </form>
                    </div>
                    {/* <div className="modal-footer">
                        <a className="btn modal-action modal-close">Ok</a>
                    </div> */}
                </div>
            </div>
        );
    }
}
 
export default Habits;