import React from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/style.scss'

import Root from './config/root'

const container = document.querySelector('#root')
const target = createRoot(container)

const render = (Component) => {
  target.render(<Component />)
}

render(Root)
