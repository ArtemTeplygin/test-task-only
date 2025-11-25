import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import App from './app/App'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
