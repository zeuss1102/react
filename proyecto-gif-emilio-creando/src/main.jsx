// Importamos la biblioteca de React
import React from 'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para
React
import ReactDOM from 'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'
//Importamos los estilos que se encuentran en src. ¿Qué significaba "./"?
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProyectoGif/>
  </React.StrictMode>,
)


