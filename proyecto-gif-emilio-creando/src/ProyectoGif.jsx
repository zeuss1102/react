import React from 'react'

export const ProyectoGif = () => {
  return (
    <div>ProyectoGif</div>
  )
}
//funcion tradicional
function (a) {
    return a + 100;
}

//función de flecha 
(a) => a + 100;

//importamos la biblioteca de react
import React from 'react';

//importamos la biblioteca  reacDOM, que proporciona métodos especificos del DOM para react
import reactDOM from 'react-dom/client'

//importamos  un componente llamado proyectoGif desde otro archivo en el mismo directorio 
import { ProyectoGif } from './ProyectoGif'
// Creamos un nuevo contenedor de raíz React en el elemento con el id 'root'
// y renderizamos el componente ProyectoGif en él
reactDOM.createRoot(document.getElementById('root')).render(
    // React.StrictMode es un componente especial de React que comprueba si tu aplicación tiene problemas potenciales durante el desarrollo
    <React.StrictMode>
        {/* Aquí es donde se renderiza el componente ProyectoGif */}
        <ProyectoGif />
        </React.StrictMode>,
)
export const ProyectoGif = () => () => {
    return (
        <>
            {/*Titulo*/}
            <h1>ProyectoGif</h1>

            {/* input */}
            {/* Listado de Gifts */}
            {/* Gif Item */}
        </>
    )
}

