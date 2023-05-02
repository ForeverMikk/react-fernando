// Async y Await

// Ejemppl
// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://asdfghjasgfhls.com');
//     })

//     return promesa;
// }

// getImagenPromesa().then(console.log);

// Se usa el async para volver una funcion normal en una promesa
const getImagen = async() => {
    return 'https://asdfghjasgfhls.com';
}

getImagen().then(console.log);