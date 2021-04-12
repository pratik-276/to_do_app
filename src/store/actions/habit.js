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
    return dispatch => {
        axios.post("habits.json", data)
            .then(response => {
                dispatch(addHabittoStore(data, response.data.name));
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