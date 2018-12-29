import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store'
import config from './config'

Amplify.configure(config)

const render = () => {
  return ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
registerServiceWorker()
