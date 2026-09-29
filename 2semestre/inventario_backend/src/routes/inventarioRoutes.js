const express = require("express");

const controller = require("../controllers/inventarioController");

const router = express.Router();


// ==========================================
// ROTAS PRINCIPAIS DO CRUD
// ==========================================

// Criar item
router.post("/", controller.criarItem);

// Listar todos os itens
router.get("/", controller.listarItens);

// Consultar item por ID
router.get("/:id", controller.buscarPorId);

// Atualizar item
router.put("/:id", controller.atualizarItem);

// Excluir item
router.delete("/:id", controller.excluirItem);


// ==========================================
// ROTAS ADICIONAIS
// ==========================================

// Buscar pelo nome
router.get("/buscar/nome", controller.buscarPorNome);

// Filtrar por local
router.get("/filtrar/local", controller.filtrarPorLocal);

// Listar itens acima de determinado valor
router.get("/filtrar/valor", controller.filtrarPorValor);

// Verificar patrimônio
router.get(
    "/patrimonio/:patrimonio",
    controller.verificarPatrimonio
);

// Valor total do inventário
router.get(
    "/total/valor",
    controller.valorTotal
);


module.exports = router;