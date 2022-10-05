//buscar etiquetas
//querySelector, querySelectorAll sintaxis css
//let h1tradicional = document.getElemntById("title"

let h1 = document.querySelector("#title"); 
console.log(h1)

// document es una fotografia, estático representativo de ese momento en el html
// console.log(document)

let elementosLi = document.querySelectorAll("li")
console.log(elementosLI)

//for, forEach, Forof, 
for (let i = 0; i < elementosLi.length; i++){
    console.log(elementosLi[i])
}

let buscador = document.querySelector("#buscador")
//retorna un array de atributos que tienen un elemento
console.log(getAttributeNames())

let imagen = document.createElement("img")
imagen.src = "https://concepto.de/wp-content/uploads/2019/05/leon-sabana-africa-e1559242836802.jpg"
imagen.alt = "foto de leon"
// class JS palabra reservada


document.body.appendChild(imagen)

