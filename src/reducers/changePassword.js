import action_types from '../actions/actionsTypes';
import api from '../data/api';

let authentification = (state = {}, action) => {
    switch(action.type){
        case action_types.CHANGE_PASSWORD_SUCCESS:
            return {
                status: 'Password changed'
            };
        case action_types.CHANGE_PASSWORD_FAILURE:
            return {
                status: 'Incorrect old password'
            };
        default: 
            return state;
    }
}

export default authentification;