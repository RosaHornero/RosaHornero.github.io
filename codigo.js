function addItem(){
    //Leemos el producto y la cantidad del formulario
    const cantidad = document.getElementById("input").value
    const tipo = document.getElementById("options").value
    console.log(cantidad)
    console.log(tipo)

    //Creamos elementos html para la tabla
    const fila = document.createElement("tr")
    const c1 = document.createElement("td")
    c1.innerText = cantidad
    const c2 = document.createElement("td")
    c2.innerText = tipo
    fila.appendChild(c1)
    fila.appendChild(c2)
}