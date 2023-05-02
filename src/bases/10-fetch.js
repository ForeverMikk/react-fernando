const apiKey = 'PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        // Creamos el elemento imagen para renderizar el gif
        const img = document.createElement('img');
        img.src = url;

        // Agregamos el Gif a el body
        document.body.append(img);
        
    })
    .catch(console.warn);