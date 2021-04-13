import React, { Component } from 'react';
import Task from './Task/Task';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Completed extends Component {
    componentWillMount(){
        this.props.getCompletedTasks();
    }
    render() { 
        return (
            <div className="container center" style={{marginTop: "20px"}}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>COMPLETED TASKS</h3></li>
                    {this.props.tasks.reverse().map(task => (
                        <Task key={task.id} task={task} complete={null} delete={null} />
                    ))}
                </ul>
                <div style={{marginTop: "20px", height: "20px"}}></div>
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