import axios from 'axios';
import * as actionTypes from './actionTypes';

const addHabittoStore = (data, id) => {
    return {
        type: actionTypes.ADD_HABIT,
        data: data,
        id: id
    }
}

export const addHabit = (data) => {
    const newHabit = {
        title: data.title,
        category: data.category,
        description: data.description
    }
    return dispatch => {
        axios.post("habits.json", newHabit)
            .then(response => {
                dispatch(addHabittoStore(newHabit, response.data.name));
            }).catch(err => {
                console.log(err);
            })
    }
}

const getAllHabits = (data) => {
    return {
        type: actionTypes.GET_ALL_HABITS,
        data: data
    }
}

export const getHabit = () => {
    return dispatch => {
        axios.get("habits.json")
            .then(response => {
                const fetchedHabits = [];
                for(let h in response.data){
                    fetchedHabits.push({
                        ...response.data[h],
                        id: h
                    });
                }
                dispatch(getAllHabits(fetchedHabits));
            }).catch(err => {
                console.log(err);
            })
    }
}

const removeHabit = (id) => {
    return {
        type: actionTypes.DELETE_HABIT,
        id: id
    }
}

export const deleteHabit = (id) => {
    return dispatch => {
        axios.delete("habits/"+id+".json")
            .then(response => {
                dispatch(removeHabit(id));
            }).catch(err => {
                console.log(err);
            })
    }
}

export const editHabit = (data) => {
    const editedHabit = {
        title: data.title,
        description: data.description,
        category: data.category
    }
    return dispatch => {
        axios.put("habits/"+data.id+".json", editedHabit)
            .then(response => {
                dispatch(getHabit());
            }).catch(err => {
                console.log(err);
            })
    }
}