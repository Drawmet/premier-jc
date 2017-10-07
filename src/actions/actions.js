import action_types from './actionsTypes';

let actions = {
  switchLanguage(language) {
    return {
      type: action_types.SWITCH_LANGUAGE,
      language
    }
  }
};

export default actions;