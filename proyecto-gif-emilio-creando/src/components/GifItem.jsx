// Definimos un componente funcional llamado GifItem que toma title, url e id como prop 
sexportconstGifItem=({title,url,id})=>{
    // Devolvemos el JSX que se renderizará
    return
    (
        // Creamos un div con la clase card
        <divclassName="card">
        {/* // Mostramos una imagen con src establecido a url y alt establecido a title */}
        <imgsrc={url}alt={title}/>
        {/* // Mostramos el título de la imagen */}
        <p>{title}</p>
        </div>
    )
}