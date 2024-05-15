import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// Importamos la biblioteca de ReactimportReact 
from'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para ReactimportReact
DOMfrom'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import{ ProyectoGif}from'./ProyectoGif'
//Importamos los estilos que se encuentran en src. ¿Qué significaba "./"?
import'./styles.css'