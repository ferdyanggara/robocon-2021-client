import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './redux/reducers/index'
import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]

const initialState = {
    numberOfArrows: 0,
    arrows: {
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: [],
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: [],
    },
    alert: [],
}

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
