USE Pixar;

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE id = 11;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';