import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from '../src/store/ConfigureStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <App/>
</BrowserRouter>
</Provider>
,document.getElementById('root'))