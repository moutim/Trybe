USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 10, 20, 30;

SELECT 10 + 15;

SELECT (7 * 7) + 7;

SELECT * from Scientists;

SELECT Name AS 'Nome do projeto', Hours AS 'Tempo de trabalho' FROM Projects;

SELECT Name FROM Scientists ORDER BY Name ASC;

SELECT Name AS 'Nome do projeto' FROM Projects ORDER BY Name DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') FROM Projects;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;

SELECT Name, Hours FROM Projects ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scrientists') FROM Scientists;