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

const addCompleteToStore = (data, id) => {
    return {
        type: actionTypes.TASK_COMPLETED,
        data: data,
        id: id
    }
}
const addCompletedTask = (data) => {
    const newData = {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        category: data.category,
        completed: data.completed,
        experience: data.experience,
        remarks: data.remarks
    }
    return dispatch => {
        axios.post("complete.json", newData)
            .then(response => {
                dispatch(addCompleteToStore(newData, response.data.name));
            }).catch(err => {
                console.log(err);
            })
    }
}

export const completeTask = (data) => {
    return dispatch => {
        dispatch(removeTask(data.id));
        axios.delete("tasks/"+data.id+".json")
            .then(response => {
                dispatch(addCompletedTask(data));
            }).catch(err => {
                console.log(err);
            })
    }
}

const getAllCompletedTasks = (data) => {
    return {
        type: actionTypes.GET_ALL_COMPLETED,
        data: data
    }
}

export const getCompletedTasks = () => {
    return dispatch => {
        axios.get("complete.json")
            .then(response => {
                const fetchedComplete = [];
                for(let h in response.data){
                    fetchedComplete.push({
                        ...response.data[h],
                        id: h
                    });
                }
                dispatch(getAllCompletedTasks(fetchedComplete));
            }).catch(err => {
                console.log(err);
            })
    }
}

export const editTask = (data) => {
    const editedTask = {
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        time: data.time
    }
    return dispatch => {
        axios.put("tasks/"+data.id+".json", editedTask)
            .then(response => {
                dispatch(getTasks());
            }).catch(err => {
                console.log(err);
            })
    }
}