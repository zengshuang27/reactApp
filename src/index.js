import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/appRouter';
import "../src/static/css/font.css"
import "../src/static/css/iconfont.css"
import "../src/static/css/common.less"
import configureStore from "./store/configureStore"
import { Provider } from "react-redux"

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>,
     document.getElementById('root'));
