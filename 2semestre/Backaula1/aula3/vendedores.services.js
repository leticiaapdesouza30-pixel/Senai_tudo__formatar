let funcionarios = require("./mockup.vendedores");

const cadastrar = (matricula, nome, salario, comissao) => {
    let funcionario = {
        matricula,
        nome,
        salario,
        comissao
    };

    funcionarios.push(funcionario);
};

const listar = () => {
    funcionarios.forEach((funcionario, indice) => {
        console.log(indice, funcionario);
    });
}


const buscar = (busca) => {
    let resultado = [];

    funcionarios.forEach((funcionario) => {
        if (JSON.stringify(funcionarios).toLowerCase().includes(busca.toLowerCase())) {
            resultado.push(funcionario);
        }
    });
    console.log(resultado);
};

const excluir = (indice) => {
    funcionarios.splice(indice, 1);
};

cadastrar(0, "Letícia Souza", 2400, 0.15);
listar();
buscar("bea");
excluir(0);
listar(); 