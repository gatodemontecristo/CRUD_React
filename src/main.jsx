import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from "./componentes/Card.jsx";
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' 
import { AutoApp } from './componentes/AutoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutoApp />
  </React.StrictMode>,
)
