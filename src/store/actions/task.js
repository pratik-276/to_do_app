import axios from 'axios';
import * as actionTypes from './actionTypes';

const addTasktoStore = (data, id) => {
    return {
        type: actionTypes.ADD_TASK,
        data: data,
        id: id
    }
}

export const addTask = (data) => {
    return dispatch => {
        axios.post("tasks.json", data)
            .then(response => {
                dispatch(addTasktoStore(data, response.data.name));
            }).catch(err => {
                console.log(err);
            })
    }
}

const getAllTasks = (data) => {
    return {
        type: actionTypes.GET_ALL_TASKS,
        data: data
    }
}

export const getTasks = () => {
    return dispatch => {
        axios.get("tasks.json")
            .then(response => {
                const fetchedTasks = [];
                for(let h in response.data){
                    fetchedTasks.push({
                        ...response.data[h],
                        id: h
                    });
                }
                dispatch(getAllTasks(fetchedTasks));
            }).catch(err => {
                console.log(err);
            })
    }
}

const removeTask = (id) => {
    return {
        type: actionTypes.DELETE_TASK,
        id: id
    }
}

export const deleteTask = (id) => {
    return dispatch => {
        axios.delete("tasks/"+id+".json")
            .then(response => {
                dispatch(removeTask(id));
            }).catch(err => {
                console.log(err);
            })
    }
}