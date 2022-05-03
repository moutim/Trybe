SELECT active, COUNT(*) AS 'Quantidade'
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) AS 'Quantidade'
FROM sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(rental_duration) AS 'Media'
FROM sakila.film
GROUP BY rating
ORDER BY 'Media' DESC;

SELECT district, COUNT(*) AS 'Quantidade'
FROM sakila.address
GROUP BY district
ORDER BY 'Quantidade' DESC;