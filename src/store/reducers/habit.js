import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    habits: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_HABITS:
            return updateObject(state, {
                habits: action.data
            });
        case actionTypes.ADD_HABIT:
            const newData = updateObject(action.data, {id: action.id});
            return updateObject(state, {
                habits: state.habits.concat(newData)
            });
        default:
            return state;
    }
}
 
export default reducer;