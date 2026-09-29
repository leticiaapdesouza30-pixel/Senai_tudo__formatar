let chocolate = 20
let energético = 30
let leite = 10

function calcularTotal(chocolate, energético, leite) {
    return chocolate + energético + leite
}

function processarCompra(chocolate, energético, leite) {
    let total = calcularTotal(chocolate, energético, leite)
    return total
}

let total = processarCompra(chocolate, energético, leite)

console.log("Preço total da compra foi R$" + total.toFixed(2))

if (total > 200) {
    console.log("A compra falhou. O cartão não passou.")
} else {
    console.log("A compra foi um sucesso. Volte sempre!")
}