import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider, createStore } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

ReactDOM.render((
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
), document.getElementById('root'));
module.hot.accept();