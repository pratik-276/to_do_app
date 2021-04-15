import React, { Component } from 'react';
import Task from './Task/Task';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Item from '../../components/Item/Item';
import M from 'materialize-css/dist/js/materialize.min.js';

class Completed extends Component {
    state = {
        modalData: {
            title: "",
            description: "",
            category: "",
            date: "",
            time: "",
            status: "completed"
        }
    }
    componentWillMount(){
        this.props.getCompletedTasks();
    }
    componentDidMount(){
        let modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});
    }
    openElement = (data) => {
        this.setState({
            modalData: {
                title: data.title,
                description: data.description,
                category: data.category,
                date: data.date,
                time: data.time,
                status: "completed"
            }
        });
        document.getElementById('openModal1').click();
    }
    render() { 
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>COMPLETED TASKS</h3></li>
                    {this.props.tasks.reverse().map(task => (
                        <Task key={task.id} task={task}
                            click={this.openElement} />
                    ))}
                </ul>
                <div id="modal1" className="modal modal-fixed-footer">
                    <Item data={this.state.modalData} />
                </div>
                <button id="openModal1" href="#modal1" className="modal-trigger" style={{
                    display: "none"
                }}></button>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        tasks: state.task.completed
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getCompletedTasks: () => dispatch(actions.getCompletedTasks())
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Completed);