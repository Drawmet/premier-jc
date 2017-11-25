import action_types from '../actions/actionsTypes';
import api from '../data/api';

const initialState = {
  content: api.getContent() // Loads default language content (en) as an initial state
};

let language = function (state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

export default language;