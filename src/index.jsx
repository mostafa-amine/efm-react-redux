import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Config/store.jsx'

const store = legacy_createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>
)
