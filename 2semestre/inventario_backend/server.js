const express = require("express");

const inventarioRoutes = require("./src/routes/inventarioRoutes");

const app = express();

const PORT = 3000;

// Permite que a API receba dados em JSON
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Inventário funcionando!",
        rota: "/inventario"
    });
});

// Rotas do inventário
app.use("/inventario", inventarioRoutes);

// Caso a rota não exista
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});