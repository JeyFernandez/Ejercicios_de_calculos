// Este codigo convierte Los grados Fahrenheit a Celcios y Viseversa
// defino mis variables
// creo dos constante con las que are las operaciones y una que son los grados en este caso tenemos 30 grados.
let grados =30
const dato1 =1.8
const dato2 = 32
//Defino una funcion llamada F_a_C que calcula los grados Celcios a Fahrenheit.
function F_a_C(){
    let fahrenheit = (grados* dato1)+dato2
    return fahrenheit
}

// hago lo mismo para el otro ejercicio
// solo que agarro funcion "F_a_C()" para que me debuelva los 30 grados que ingrese
function C_a_F(){
    let celcius = (F_a_C()-dato2)/dato1
    return celcius
}
// con un console.log muestro un resultado, concatenando textos de referencia
console.log(grados + ' Grados Celcius son: ' + F_a_C() + ' Grados Fahrenheit')
console.log(grados + ' Grados Fahrenheit son: ' + C_a_F() + ' Grados Celcius')
// ejercicio 1 y 2
