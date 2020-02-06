import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './reset.css';

import { Provider } from 'react-redux';
import Layout from './hoc/Layout/Layout'
import App from './App';
import TestContainer from './components/TestComponent'

import store from './store/store'

const appRoot = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Layout>                 
                <TestContainer/>
                <App/>
            </Layout>
        </BrowserRouter>
    </Provider>
), appRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();