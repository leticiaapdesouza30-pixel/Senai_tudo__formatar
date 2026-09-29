const express = require("express")
const compras = require("../dados.json")

const mostrarCompras = (req, res) => {
    calcularSubtotais()
    res.send(compras)
}

const novaCompra = (req, res) => {
    if(req.body){
        res.send("Compra recebida, e em separação")
        compras.push(req.body)
    }else{ 
        res.send("Ocorreu um erro ao receber o pedido de compra")
    }
}

const calcularSubtotais = () => {
    pedidos.forEach(p=>{
        p.subtotal = p.precoUnitario * p.quantidade
    })
}

const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.post("/", novaCompra)
app.get("/", mostrarCompras)

app.listen(porta, () => { 
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})