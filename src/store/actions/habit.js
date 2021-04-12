import axios from 'axios';
import * as actionTypes from './actionTypes';

const addHabittoStore = (data) => {
    return {
        type: actionTypes.ADD_HABIT,
        data: data
    }
}

export const addHabit = (data) => {
    return dispatch => {
        axios.post("habits.json", data)
            .then(response => {
                console.log(response.data);
                dispatch(addHabittoStore(data));
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
                console.log(response.data);
                dispatch(getAllHabits(response.data));
            }).catch(err => {
                console.log(err);
            })
    }
}