import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './redux'
import App from './components'

const renderDom = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(renderDom, document.getElementById('root'))
