import action_types from './actionsTypes';

let actions = {
  switchLanguage(language) {
    return {
      type: action_types.SWITCH_LANGUAGE,
      language
    }
  },
  getAuthentification(user){
    return {
      type: action_types.LOGIN_SUCCESS,
      user
    }
  },
  changePassword(username, oldPassword, newPassword){
    return {
      type: action_types.CHANGE_PASSWORD,
      username,
      oldPassword,
      newPassword,
    }
  }
};

export default actions;