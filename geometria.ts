// en este codigo calculare el area de un Cuadraro, Circulo, Triangulo Rectangulo y el perimetro de un cuadrado

// Area de Un cuadrado ejercicio 7
let medidaCuadrado = 8
function Area_Cuadraro(){
    let areaCuadrado=(2**medidaCuadrado)
    return areaCuadrado
}
// perimetro cuadrado ejerciio 8
function perimetroCuadrado(){
    let perimetro=(4*medidaCuadrado)
    return perimetro
}

// Area de un Circulo ejercicio 9
let radio =8
var pi= Math.PI
function Area_circulo(){
    let areaCirculo = (pi*radio*radio)
    return areaCirculo
}

//Area de un trinagulo rectangulo ejercicio 10
let base =4
let altura= 6
function Area_triangulo_rectangulo(){
    let areaTrianguloRectangulo= (base*altura)/2
    return areaTrianguloRectangulo
}

console.log('El area del cuadro es: '+Area_Cuadraro() +' y '+ 'El perimetro es: '+ perimetroCuadrado())
console.log('')
console.log('El area de un Circulo es: '+Area_circulo())
console.log('')
console.log('El area de un Triangulo Rectangulo es: '+ Area_triangulo_rectangulo())