// Async y Await

// Ejempplo sin usar async
// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://asdfghjasgfhls.com');
//     })
//     return promesa;
// }
// getImagenPromesa().then(console.log);

// Se usa el async para volver una funcion normal en una promesa
const getImagen = async() => {

    try {
        const apiKey = 'PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd';    
        // El await trata todo el codigo dentro de la promesa como si fuera sincrono
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        //  Creamos el elemento imagen para renderizar el gif
        const img = document.createElement('img');
        img.src = url;

        // Agregamos el Gif al body
        document.body.append(img);
        console.log(url);
    } catch(err) {
        console.warn();
    }
}

getImagen();
