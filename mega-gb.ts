// este codigo convierte los Megabytes a Gigabytes y viseversa
// defino dos varibles una costante la cual sera el interceptor de las formulas
let datos =1000
const miconst =1000

function mega_a_Gb(){
    let gb=(datos/miconst)
    return gb
}
// mi primera funcion coge los datos en mega y los convierte a GB
function gb_a_mega(){
    let mega=(mega_a_Gb()*miconst)
    return mega
}
// Mi segunda Funcion Coge el la funcion anterior pra convertir las GB nuevamente a Megas
// con cosole.log muestro los resultados en consola 
console.log(mega_a_Gb() + ' GB son: ' +gb_a_mega()+ ' Megas')
console.log(datos+' Megas son: '+mega_a_Gb()+' GB')

// ejercicios 3 y 4