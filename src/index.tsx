import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppRouter from './components/AppRouter/AppRouter'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import axios from 'axios'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './store/AppStore'
const config = require('./server/config/default.json')
injectTapEventPlugin()
// setup global axios defaults
var instance = axios.create({
  baseURL: 'http://localhost:3001'
})
axios.defaults.timeout = 6000
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
    <ReduxProvider store={appStore}>
         <AppRouter />
    </ReduxProvider>,
    document.getElementById('root')
)
