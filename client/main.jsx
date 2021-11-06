import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/style.scss'

import Root from './config/root'

const target = document.querySelector('#root')

const render = (Component) => {
  ReactDOM.render(<Component />, target)
}

render(Root)
