USE sakila;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT first_name AS nome, last_name AS sobrenome FROM actor ORDER BY nome; 
SELECT * FROM language LIMIT 5 OFFSET 1;
SELECT * FROM film;
SELECT title, release_year, length, rating, replacement_cost 
FROM film ORDER BY length DESC, replacement_cost ASC LIMIT 20;