import action_types from '../actions/actionsTypes';
import api from '../data/api';

const initialState = {
    user: {
        loggedIn: false,
    }
};

let authentification = (state = initialState, action) => {
    switch(action.type){
        case action_types.LOGIN_SUCCESS:
            return {
                user: api.getAuthentification(action.user.username, action.user.password),
            };
        case action_types.LOGIN_FAILED:
            return {
                user: {
                    loggedIn: false,
                }
            };
        default: 
            return state;
    }
}

export default authentification;