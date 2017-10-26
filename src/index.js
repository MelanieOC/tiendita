import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './Body'
import registerServiceWorker from './registerServiceWorker';
import store from './Store';
import {Provider} from 'redux-zero/react';

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
