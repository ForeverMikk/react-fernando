//Promesas en Javascript

const heroes = [
    {
        id: 1,
        name: "Spiderman",
        owner: "Marvel"
    },
    {
        id: 2,
        name: "Superman",
        owner: "DC"
    }
]

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

// Las promesas son asincronas por naturaleza
// al momento de ejecutar codigo todo lo sincrono se ejecutara primero y despues se ejecutara lo asincrono(promesas)
// El reject se ejecuta cuando la promesa no se ejecute o tenga un error
// El resolve se ejecuta despues de que la promesa se ejecute

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Tarea
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            } else {
                reject("No hay Nada")
            }
        }, 2000);
    })
}

getHeroeByIdAsync(4)
    // .then(console.log) //Si solo vas a recibir un argumento y quieres que se vea directo puedes hacer esto
    .then(heroe => console.log("Heroe", heroe))
    // .catch(err => console.log(err));
    .catch(console.warn);