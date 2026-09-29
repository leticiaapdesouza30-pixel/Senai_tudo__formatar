const service = require("../services/inventarioService");


// ==========================================
// VALIDAR DADOS
// ==========================================

function validarDados(dados) {

    const camposObrigatorios = [
        "item",
        "local",
        "dataRegistro",
        "valor",
        "patrimonio"
    ];

    const camposFaltantes = camposObrigatorios.filter(
        campo =>
            dados[campo] === undefined ||
            dados[campo] === null ||
            dados[campo] === ""
    );

    if (camposFaltantes.length > 0) {

        return `Campos obrigatórios: ${camposFaltantes.join(", ")}.`;
    }

    if (
        typeof dados.valor !== "number" ||
        dados.valor < 0
    ) {

        return "O campo valor deve ser um número maior ou igual a zero.";
    }

    return null;
}


// ==========================================
// CRIAR ITEM
// POST /inventario
// ==========================================

exports.criarItem = (req, res) => {

    const erro = validarDados(req.body);

    if (erro) {

        return res.status(400).json({
            erro: erro
        });
    }


    // Verifica se o patrimônio já existe
    const patrimonioExistente =
        service.buscarPorPatrimonio(
            req.body.patrimonio
        );


    if (patrimonioExistente) {

        return res.status(409).json({
            erro: "O número de patrimônio informado já está cadastrado."
        });
    }


    const novoItem =
        service.criar(req.body);


    res.status(201).json(novoItem);
};



// ==========================================
// LISTAR TODOS
// GET /inventario
// ==========================================

exports.listarItens = (req, res) => {

    const itens = service.listar();

    res.status(200).json(itens);
};



// ==========================================
// BUSCAR POR ID
// GET /inventario/:id
// ==========================================

exports.buscarPorId = (req, res) => {

    const id = Number(req.params.id);

    const item =
        service.buscarPorId(id);


    if (!item) {

        return res.status(404).json({
            erro: "Item não encontrado."
        });
    }


    res.status(200).json(item);
};



// ==========================================
// ATUALIZAR
// PUT /inventario/:id
// ==========================================

exports.atualizarItem = (req, res) => {

    const id = Number(req.params.id);


    const erro = validarDados(req.body);

    if (erro) {

        return res.status(400).json({
            erro: erro
        });
    }


    const itemExistente =
        service.buscarPorId(id);


    if (!itemExistente) {

        return res.status(404).json({
            erro: "Item não encontrado."
        });
    }


    // Verifica patrimônio duplicado
    const patrimonioExistente =
        service.buscarPorPatrimonio(
            req.body.patrimonio
        );


    if (
        patrimonioExistente &&
        patrimonioExistente.id !== id
    ) {

        return res.status(409).json({
            erro: "O número de patrimônio já está cadastrado em outro item."
        });
    }


    const itemAtualizado =
        service.atualizar(
            id,
            req.body
        );


    res.status(200).json(itemAtualizado);
};



// ==========================================
// EXCLUIR
// DELETE /inventario/:id
// ==========================================

exports.excluirItem = (req, res) => {

    const id = Number(req.params.id);

    const itemRemovido =
        service.excluir(id);


    if (!itemRemovido) {

        return res.status(404).json({
            erro: "Item não encontrado."
        });
    }


    res.status(200).json({

        mensagem: "Item excluído com sucesso.",

        item: itemRemovido

    });
};



// ==========================================
// BUSCAR PELO NOME
// GET /inventario/buscar/nome?nome=Notebook
// ==========================================

exports.buscarPorNome = (req, res) => {

    const nome = req.query.nome;


    if (!nome) {

        return res.status(400).json({
            erro: "Informe o nome do item."
        });
    }


    const resultados =
        service.buscarPorNome(nome);


    res.status(200).json(resultados);
};



// ==========================================
// FILTRAR POR LOCAL
// GET /inventario/filtrar/local?local=Laboratório
// ==========================================

exports.filtrarPorLocal = (req, res) => {

    const local = req.query.local;


    if (!local) {

        return res.status(400).json({
            erro: "Informe o local."
        });
    }


    const resultados =
        service.filtrarPorLocal(local);


    res.status(200).json(resultados);
};



// ==========================================
// FILTRAR POR VALOR
// GET /inventario/filtrar/valor?valor=3000
// ==========================================

exports.filtrarPorValor = (req, res) => {

    const valor = Number(req.query.valor);


    if (Number.isNaN(valor)) {

        return res.status(400).json({
            erro: "Informe um valor numérico."
        });
    }


    const resultados =
        service.filtrarPorValor(valor);


    res.status(200).json(resultados);
};



// ==========================================
// VERIFICAR PATRIMÔNIO
// ==========================================

exports.verificarPatrimonio = (req, res) => {

    const patrimonio =
        req.params.patrimonio;


    const item =
        service.buscarPorPatrimonio(
            patrimonio
        );


    res.status(200).json({

        cadastrado: Boolean(item),

        item: item || null

    });
};



// ==========================================
// VALOR TOTAL
// ==========================================

exports.valorTotal = (req, res) => {

    const itens =
        service.listar();


    const total =
        service.valorTotal();


    res.status(200).json({

        quantidadeItens: itens.length,

        valorTotal: total

    });
};