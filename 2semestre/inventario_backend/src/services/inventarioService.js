const fs = require("fs");

const path = require("path");


// Caminho do arquivo JSON
const arquivo =
    path.join(
        __dirname,
        "../../data/inventario.json"
    );


// ==========================================
// LER DADOS
// ==========================================

function lerDados() {

    const dados =
        fs.readFileSync(
            arquivo,
            "utf8"
        );


    return JSON.parse(dados);
}



// ==========================================
// SALVAR DADOS
// ==========================================

function salvarDados(dados) {

    fs.writeFileSync(

        arquivo,

        JSON.stringify(
            dados,
            null,
            4
        ),

        "utf8"
    );
}



// ==========================================
// GERAR PRÓXIMO ID
// ==========================================

function proximoId(dados) {

    if (dados.length === 0) {

        return 1;
    }


    const maiorId =
        Math.max(
            ...dados.map(
                item => item.id
            )
        );


    return maiorId + 1;
}



// ==========================================
// LISTAR
// ==========================================

exports.listar = () => {

    return lerDados();
};



// ==========================================
// BUSCAR POR ID
// ==========================================

exports.buscarPorId = (id) => {

    const dados =
        lerDados();


    return dados.find(
        item => item.id === id
    );
};



// ==========================================
// BUSCAR POR PATRIMÔNIO
// ==========================================

exports.buscarPorPatrimonio =
    (patrimonio) => {

        const dados =
            lerDados();


        return dados.find(

            item =>
                item.patrimonio
                    .toLowerCase() ===
                String(patrimonio)
                    .toLowerCase()

        );
    };



// ==========================================
// CRIAR
// ==========================================

exports.criar = (dadosRecebidos) => {

    const dados =
        lerDados();


    const novoItem = {

        id: proximoId(dados),

        item:
            dadosRecebidos.item,

        local:
            dadosRecebidos.local,

        dataRegistro:
            dadosRecebidos.dataRegistro,

        valor:
            Number(
                dadosRecebidos.valor
            ),

        patrimonio:
            dadosRecebidos.patrimonio

    };


    dados.push(novoItem);


    salvarDados(dados);


    return novoItem;
};



// ==========================================
// ATUALIZAR
// ==========================================

exports.atualizar =
    (id, dadosRecebidos) => {

        const dados =
            lerDados();


        const indice =
            dados.findIndex(
                item =>
                    item.id === id
            );


        if (indice === -1) {

            return null;
        }


        const itemAtualizado = {

            id: id,

            item:
                dadosRecebidos.item,

            local:
                dadosRecebidos.local,

            dataRegistro:
                dadosRecebidos.dataRegistro,

            valor:
                Number(
                    dadosRecebidos.valor
                ),

            patrimonio:
                dadosRecebidos.patrimonio
        };


        dados[indice] =
            itemAtualizado;


        salvarDados(dados);


        return itemAtualizado;
    };



// ==========================================
// EXCLUIR
// ==========================================

exports.excluir = (id) => {

    const dados =
        lerDados();


    const indice =
        dados.findIndex(
            item =>
                item.id === id
        );


    if (indice === -1) {

        return null;
    }


    const itemRemovido =
        dados.splice(
            indice,
            1
        )[0];


    salvarDados(dados);


    return itemRemovido;
};



// ==========================================
// BUSCAR PELO NOME
// ==========================================

exports.buscarPorNome =
    (nome) => {

        const dados =
            lerDados();


        return dados.filter(

            item =>
                item.item
                    .toLowerCase()
                    .includes(
                        String(nome)
                            .toLowerCase()
                    )

        );
    };



// ==========================================
// FILTRAR POR LOCAL
// ==========================================

exports.filtrarPorLocal =
    (local) => {

        const dados =
            lerDados();


        return dados.filter(

            item =>
                item.local
                    .toLowerCase()
                    .includes(
                        String(local)
                            .toLowerCase()
                    )

        );
    };



// ==========================================
// FILTRAR POR VALOR
// ==========================================

exports.filtrarPorValor =
    (valor) => {

        const dados =
            lerDados();


        return dados.filter(

            item =>
                item.valor > valor

        );
    };



// ==========================================
// VALOR TOTAL
// ==========================================

exports.valorTotal = () => {

    const dados =
        lerDados();


    return dados.reduce(

        (total, item) => {

            return total + item.valor;

        },

        0
    );
};