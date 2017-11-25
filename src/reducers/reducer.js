import { combineReducers } from 'redux';

import language from './language';
import authentification from './authentification';

const reducer = combineReducers({
    content: language,
    user: authentification
})

export default reducer;