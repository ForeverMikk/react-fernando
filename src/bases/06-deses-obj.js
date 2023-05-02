// Desestructuracion de Objetos 
// Destrcturing

const persona = {
    name: "Tony",
    edad: 45,
    clave: "Ironman"
};

// const { name, edad, clave } = persona;
// console.log(name, clave, edad);

const retornaPersona = ({name, clave, edad, rango = "Capitan"}) => {
    return {
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 14.3637,
            lng: -15.654656
        }
    }
}
// Se puede desestructurar de esta manera pero no es muy usado
// Se llama desestructuracion anidada
const {nombreClave, anios, latlng: {lat, lng}} = retornaPersona(persona);

// Por lo general se desestructura usando variables independientes
// const {nombreClave, anios, latlng} = retornaPersona(persona);
// const {lat, lng} = latlng;

console.log(nombreClave, anios, lat, lng);

