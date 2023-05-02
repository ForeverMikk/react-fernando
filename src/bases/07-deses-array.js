// Desestructuracion de Arreglos
// Destrcturing

const personajes = ['Goku', 'Vegeta', 'Gohan'];

//Para indicar que valor quieres lo determinas con las comas para indicar su posicion
const [,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros]= retornaArreglo();

console.log(letras, numeros);


// Tarea 
// 1. El primer valor del array sera nombre
// 2. el segundo se llamara setNombre
const useState = (valor) => {
    return [valor, ()=> {console.log("Hola Mundo")}];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
