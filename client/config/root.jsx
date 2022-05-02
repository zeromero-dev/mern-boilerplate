import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux'
import Startup from './startup'
import Main from '../components/main'

const Root = () => {
  return (
    <Provider store={store}>
      <Startup>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Startup>
    </Provider>
  )
}

export default Root
