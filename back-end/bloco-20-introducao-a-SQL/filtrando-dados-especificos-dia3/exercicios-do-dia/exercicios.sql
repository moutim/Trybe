USE PecasFornecedores;

SELECT * FROM Pecas WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%';

SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco ASC;

SELECT * FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';