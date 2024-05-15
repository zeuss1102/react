// Importamos la función useState de React 
import{ useState}from'react';
// Definimos un componente funcional llamado AddCategory
exportconstAddCategory=({onNewCategory})=>{
    
    // Creamos una variable de estado inputValue y una función para actualizarla setInputValue
    const[inputValue,setInputValue]=useState('');
    // Definimos una función que se activa cuando cambia el valor del campo de entrada
    constonInputChange=({target}) =>{
        // Actualizamos inputValue con el nuevo valor del campo de entrada
        setInputValue( target.value);
    }
        // Definimos una función que se activa cuando se envía el formulario
        constonSubmit=( event) =>{
            // Prevenimos la recarga de la página
            event.preventDefault();
            // Verificamos que inputValue no esté vacío o solo contenga espacios en blanco
            if( inputValue.trim().length<=1) return;
            // Limpiamos el campo de entrada
            setInputValue('');
            // Llamamos a la función onNewCategory con inputValue como argumento
            onNewCategory( inputValue.trim() );}
            // Devolvemos el JSX que se renderizará
            return (
                <formonSubmit={onSubmit}>
                <inputtype="text"placeholder="Buscar gifs"
                // Vinculamos el valor del campo de entrada a inputValue
                value={inputValue}
                // Cuando cambia el valor del campo de entrada, llamamos a onInputChange
                onChange={onInputChange}
                />
            </form>
            )
        }