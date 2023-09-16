import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LandingPage } from './LandingPage/LandingPage'
import 'bulma/css/bulma.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
