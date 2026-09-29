DROP DATABASE IF EXISTS amparo_taxi;
CREATE DATABASE amparo_taxi;

use amparo_taxi;

CREATE TABLE motorista (
    Id INT(11) PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    CPF VARCHAR(15),
    CNH VARCHAR(20),
    Celular VARCHAR(15),
    Email VARCHAR(100),
    obs TEXT,
    status ENUM('INATIVO', 'ATIVO')
);
CREATE TABLE veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(20),
    Marca VARCHAR(20),
    Cor VARCHAR(20),
    Ano INT(11),
    Motorista_id INT(11)
);
CREATE TABLE viagem (
    Id INT(11) PRIMARY KEY AUTO_INCREMENT,
    Passageiro_id INT(11),
    Placa VARCHAR(10),
    Valor DECIMAL(10,2),
    Origem VARCHAR(50),
    Hora_partida DATETIME,
    Destino VARCHAR(50),
    Hora_chegada DATETIME,
    Avaliacao_motorista INT(11),
    Avaliacao_passageiro INT(11)
);
CREATE TABLE passageiro (
    Id INT(11) PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    CPF VARCHAR(15),
    Celular VARCHAR(15),
    Email VARCHAR(100),
    obs TEXT,
    status ENUM('ATIVO','BANIDO')
)
    ALTER TABLE veiculo ADD constraint fk_dirige foreign key (motorista_id) references motorista(id);
ALTER TABLE viagem ADD constraint fk_utiliza foreign key (placa) references veiculo(placa);
ALTER TABLE viagem ADD constraint fk_viaja foreign key (passageiro_id) references passageiro(id);