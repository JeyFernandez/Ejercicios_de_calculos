// este codigo convierte Kilometros a Metros practicamnte es igual que el de las megas debido a que es la misma formula 

let distancia =1000
const constMedida =1000

// funcion para calcular los Kilometros a Metros
function Km_a_M(){
    let M=(distancia/constMedida)
    return M
}

// funcion para calcular los metros a kilometros
function M_a_Km(){
    let Km=(Km_a_M()*constMedida)
    return Km
}

console.log(Km_a_M() + ' Kilometros son: ' + M_a_Km()+ ' Metros')
console.log(distancia+' Metros son: '+Km_a_M()+' Kilometros')