import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    tasks: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_TASKS:
            return updateObject(state, {
                tasks: action.data
            });
        case actionTypes.ADD_TASK:
            const newData = updateObject(action.data, {id: action.id});
            return updateObject(state, {
                tasks: state.tasks.concat(newData)
            });
        case actionTypes.DELETE_TASK:
            const tasks = state.tasks.filter(task => task.id!==action.id);
            return updateObject(state, {
                tasks: tasks
            });
        default:
            return state;
    }
}
 
export default reducer;