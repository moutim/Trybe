USE sakila;

INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

INSERT INTO category (name)
VALUES ('TESTE1'), ('TESTE2'), ('TESTE3'), ('TESTE4'), ('TESTE5');

INSERT INTO `sakila`.`staff`
(first_name, last_name, address_id, email, store_id, username)
VALUES
('Vitor', 'Moutim', 7, 'moutimg@gmail.com', 1, 'moutim'),
('Hugo', 'Xavier', 77, 'vagni@gmail.com', 1, 'vagni');

INSERT INTO store (manager_staff_id, address_id)
VALUES (7, 7);

INSERT INTO `sakila`.`staff`
(first_name, last_name, address_id, email, store_id, username)
VALUES
('Vitor', 'Moutim', 7, 'moutimg@gmail.com', 1, 'moutim');