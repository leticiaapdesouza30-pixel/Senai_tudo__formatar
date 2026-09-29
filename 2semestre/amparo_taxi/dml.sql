USE amparo_taxi;

INSERT INTO motorista (id, nome, cpf, cnh, celular, email, obs, status) VALUES
(1, 'Carlos Eduardo Silva', '123.456.789-01', '12345678900', '(19) 98765-4321', 'carlos.silva@email.com', 'Motorista experiente, atende região central.', 'ATIVO'),
(2, 'Ana Paula Oliveira', '234.567.890-12', '23456789011', '(19) 97654-3210', 'ana.oliveira@email.com', 'Disponível para turnos da noite.', 'ATIVO'),
(3, 'Roberto Santos', '345.678.901-23', '34567890122', '(19) 96543-2109', 'roberto.santos@email.com', 'Preferência por viagens intermunicipais.', 'INATIVO');

INSERT INTO veiculo (placa, modelo, marca, cor, ano, motorista_id) VALUES
('ABC-1D23', 'Corolla', 'Toyota', 'Prata', 2021, 1),
('XYZ-9E87', 'Onix', 'Chevrolet', 'Preto', 2022, 2),
('KML-4F56', 'HB20', 'Hyundai', 'Branco', 2020, 3);

INSERT INTO passageiro (id, nome, cpf, celular, email, obs, status) VALUES
(1, 'Fernanda Lima', '456.789.012-34', '(19) 95432-1098', 'fernanda.lima@email.com', 'Usuária frequente para trabalho.', 'ATIVO'),
(2, 'Lucas Mendes', '567.890.123-45', '(19) 94321-0987', 'lucas.mendes@email.com', 'Solicita transporte aos finais de semana.', 'ATIVO'),
(3, 'Mariana Costa', '678.901.234-56', '(19) 93210-9876', 'mariana.costa@email.com', 'Cliente preferencial.', 'ATIVO');

INSERT INTO viagem (passageiro_id, placa, valor, origem, hora_partida, destino, hora_chegada, avaliacao_motorista, avaliacao_passageiro) VALUES
(1, 'ABC-1D23', 25.50, 'Rua das Flores, 100', '2026-03-01 08:00:00', 'Av. Central, 500', '2026-03-01 08:20:00', 5, 5),
(1, 'XYZ-9E87', 42.00, 'Av. Central, 500', '2026-03-02 18:00:00', 'Rua das Flores, 100', '2026-03-02 18:35:00', 5, 4),
(1, 'KML-4F56', 18.00, 'Rua das Flores, 100', '2026-03-05 14:15:00', 'Shopping Plaza', '2026-03-05 14:30:00', 4, 5);

INSERT INTO viagem (passageiro_id, placa, valor, origem, hora_partida, destino, hora_chegada, avaliacao_motorista, avaliacao_passageiro) VALUES
(2, 'XYZ-9E87', 35.00, 'Rua São Paulo, 45', '2026-03-06 21:00:00', 'Bar do Zé - Centro', '2026-03-06 21:25:00', 5, 5),
(2, 'ABC-1D23', 50.00, 'Bar do Zé - Centro', '2026-03-07 02:30:00', 'Rua São Paulo, 45', '2026-03-07 02:55:00', 4, 4),
(2, 'XYZ-9E87', 85.50, 'Rua São Paulo, 45', '2026-03-10 10:00:00', 'Aeroporto', '2026-03-10 11:10:00', 5, 5);

INSERT INTO viagem (passageiro_id, placa, valor, origem, hora_partida, destino, hora_chegada, avaliacao_motorista, avaliacao_passageiro) VALUES
(3, 'KML-4F56', 15.00, 'Rua XV de Novembro, 200', '2026-03-11 09:30:00', 'Hospital Municipal', '2026-03-11 09:42:00', 5, 5),
(3, 'ABC-1D23', 22.00, 'Hospital Municipal', '2026-03-11 12:00:00', 'Restaurante Sabor', '2026-03-11 12:15:00', 5, 5),
(3, 'XYZ-9E87', 30.00, 'Restaurante Sabor', '2026-03-11 14:00:00', 'Rua XV de Novembro, 200', '2026-03-11 14:22:00', 4, 5);
