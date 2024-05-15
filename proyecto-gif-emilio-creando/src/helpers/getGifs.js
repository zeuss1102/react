// Definimos una función asíncrona getGifs que toma una categoría como argumento 
exportconstgetGifs=async(category) => {
    // Construimos la URL para la API de Giphy con la categoría y un límite de 10 imágenes
    consturl = `https://api.giphy.com/v1/gifs/search?api_key=qLbHvT0BaqjtvqhtC6dwiObUukBdzimN&q=${ category 

    }&limit=10`;
    // Hacemos una petición a la API de Giphy
    constresp=awaitfetch( url);
    // Extraemos los datos de la respuesta en formato JSON
    const{data}=awaitresp.json();
    // Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada imagen
    constgifs=data.map( img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    // Devolvemos el arreglo de objetos
    returngifs;
}