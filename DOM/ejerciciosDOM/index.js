//ejercicio 1 
let titulo= document.getElementById("titulo")
console.log(titulo);

//ejercicio 2
let tituloPrincipal= "frutas"
titulo.innerHTML= tituloPrincipal

//ejercicio 3
let headerAndFooter= document.querySelectorAll(".headerAndFooter")
//forma 1
// headerAndFooter[0].style.backgroundColor= "orange"
// headerAndFooter[1].style.backgroundColor= "orange"
//forma 2
for (const iterator of headerAndFooter) {
    iterator.style.backgroundColor= "orange"
}

//ejercicio 4
let miNombre= document.getElementById("miNombre")
console.log(miNombre);

let miNombreCompleto= " Dario Mirabal, Cohort 54"
miNombre.innerHTML += miNombreCompleto

//ejercicio 5
let contenedor= document.getElementById("contenedor")
console.log(contenedor);

//ejercicio 6
function crearTarjeta(objeto) {
    return `
        <img class="w-40 h-2/4" src="${objeto.foto}" class="image" alt="${objeto.nombre}">
        <h3>${objeto.nombre}</h3>
        <p>${objeto.descripcion}</p>
    `
} 

//ejercicio 7
function iteradorArray(array) {
    for (const iterator of array) {
        let divContent= document.createElement("div")
        divContent.className= "flex flex-col border-solid border-2 border-orange-400 w-1/5 items-center h-64"
        divContent.innerHTML= crearTarjeta(iterator)
        contenedor.appendChild(divContent)
    }
}

iteradorArray(frutas)

//ejercicio 9
let lista= document.getElementById("lista")
let listaDulce= document.createElement("h2")
listaDulce.innerHTML= "<h2 class='text-3xl'>Frutas Dulces</h2>"
lista.appendChild(listaDulce)

//ejercicio 10
function createLists(frutas) {
    let listaDesordenada = document.createElement("ul")
    for (const fruta of frutas) {
        if (fruta.esDulce){
            let item= document.createElement("li")
            item.innerHTML = fruta.nombre
            item.className = "w-3"
            listaDesordenada.appendChild(item)
        } 
    }
    return listaDesordenada
}

//ejercicio 11
let list= createLists(frutas)
lista.appendChild(list)

list.className =  " flex flex-col items-center list list-disc justify-center"

