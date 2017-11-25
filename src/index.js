import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './containers/App';
import reducer from './reducers/reducer';

let store = createStore(reducer);


render(
    <Provider {... {store}}>
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
