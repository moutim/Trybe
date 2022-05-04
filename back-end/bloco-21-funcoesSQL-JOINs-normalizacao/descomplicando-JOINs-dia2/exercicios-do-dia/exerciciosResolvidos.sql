-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT B.domestic_sales, B.international_sales, M.title 
FROM BoxOffice AS B
INNER JOIN Movies AS M ON B.movie_id = M.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme 
-- que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT (B.domestic_sales + B.international_sales) AS 'Numero de vendas', M.title 
FROM BoxOffice AS B
INNER JOIN Movies AS M ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT M.title, B.rating 
FROM BoxOffice AS B
INNER JOIN Movies AS M ON B.movie_id = M.id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que
-- não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater;
SELECT M.title, T.name 
FROM Movies AS M
LEFT JOIN Theater AS T ON M.theater_id = T.id;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que
-- não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.name, M.title
FROM Theater AS T
RIGHT JOIN Movies AS M ON M.theater_id = T.id;

-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão 
-- em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT * 
FROM Movies AS M
INNER JOIN BoxOffice AS B ON M.id = B.movie_id
WHERE M.theater_id IS NOT NULL
AND B.rating > 8;
