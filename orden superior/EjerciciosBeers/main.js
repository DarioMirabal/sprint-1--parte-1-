// //ejercicio 1
// const imprimirMensaje = mensaje => console.log(mensaje);


// //ejercicio 2
// const crearMultiplicación = (numero1, numero2) => {
//     let resultado = numero1 * numero2
//     return resultado
// }


// // ejercicio 3
// function multiplicar(funcion) {
//     let numeros = [ 1,2,3,4,5,6,7,8,9]
//     let numerosMultiplicados = numeros.map(funcion)
//     return numerosMultiplicados
// }
// console.log(multiplicar(crearMultiplicación)); 


// //ejercicio 4 
// function mayorAlcohol(cervezas) {
//     let cerveza = []
//     cervezas = beers.toSorted((a , b) => b.abv-a.abv)
//     cerveza= cervezas.splice( 0 , 10 )
//     return cerveza
// }
// console.log(mayorAlcohol(beers));


// //ejercicio 5
// function menosAmargas(amargas) {
//     let amarga = []
//     amargas = beers.toSorted (( a , b) => a.ibu-b.ibu)
//     amarga = amargas.splice ( 0 , 10 )
//     return amarga
// }

// console.log(menosAmargas(beers));


// //ejercicio 6
// const cervezas = ( cervezas, nombre ) => {
//     let birra = cervezas.find( cerveza => cerveza.name == nombre)
//     if (birra){
//         return birra
//     } else{
//         return `no se encontro ningun resultado para ${nombre}` 
//     }
// }
// console.log(cervezas(beers, 'Buzz'));


// //ejercicio 7
// const encontrarIbu = (arrayCervezas,amargor) =>{
//     let ibu = arrayCervezas.find( cervezasAmargor => cervezasAmargor.ibu === amargor)
//     if (ibu){
//         return ibu
//     }else{
//         return `No hay cerveza con un ibu de ${amargor}`
//     }
// }
// console.log(encontrarIbu(beers, 60));


// //ejercicio 8 
// const cerveza = nombreCerveza => {
//     let nombre= beers.findIndex( cervezas => cervezas.name == nombreCerveza)
//     if (nombre !== -1){
//         return nombre
//     }else{
//         return `${nombreCerveza} no existe`
//     }
// }
// console.log(cerveza('Buzz'));


//ejercicio 9
// const cervecita = (cerveza , alcohol) =>{
//     let birra = cerveza.filter(cerveza => cerveza.abv < alcohol).map(cerveza => ({nombre: cerveza.name, alcohol: cerveza.abv, amargura: cerveza.ibu})) 
//     return birra
// }
// console.log(cervecita(beers, 1));


//ejercicio 10
// const arrayCervezas = (cerveza, propiedad, ascendente) =>{
//     let birra = (a , b) => {
//         if (ascendente){
//             return a[propiedad]-b[propiedad]
//         }else{
//             return b[propiedad]-a[propiedad]
//         }
//     }
//     let birras= cerveza.toSorted(birra)
//     return birras.splice(0,10) 
// }

// console.log(arrayCervezas(beers, 'ibu', true)); 


//ejercicio 11
let tabla= document.getElementById("tabla-cervezas")
const renderTable = (beers, id) =>{
    let tableContent= document.createElement("table")
    tableContent.className= "border-gray-50 border-1"
    let tableHead=`<thead>
        <tr>
            <th>Nombre</th>
            <th>ABV (Alcohol por Volumen)</th>
            <th>IBU (Unidad Internacional de Amargor)</th>
        </tr>
    </thead>`
    tableContent.innerHTML= tableHead
    let tableBody= document.createElement("tbody")
    for (const beer of beers) {
        // let tableTr= `<tr>
        // <th>${beer.name}</th>
        // <th>${beer.abv}</th>
        // <th>${beer.ibu}</th>
        // </tr>` 
        // tableBody.appendChild(tableTr)
        let tableTr= document.createElement("tr")
        let tableThName= document.createElement("th")
        let tableThAbv= document.createElement("th")
        let tableThIbu= document.createElement("th")
        tableThName.innerText= beer.name
        tableThAbv.innerText= beer.abv
        tableThIbu.innerText= beer.ibu
        tableTr.appendChild(tableThName)
        tableTr.appendChild(tableThAbv)
        tableTr.appendChild(tableThIbu)
        tableBody.appendChild(tableTr)
    }
    tableContent.appendChild (tableBody)
    id.appendChild(tableContent)
}


renderTable(beers, tabla)