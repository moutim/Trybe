# Exercício 7
Crie um arquivo Compose para subir o Wordpress com MySQL

* Utilize a imagem wordpress:latest e mysql:5.7 ;
* Faça bind da porta 80 do container do wordpress para 8080 do host ;
* Defina as seguintes variáveis para o wordpress :
  * WORDPRESS_DB_HOST: db:3306
  * WORDPRESS_DB_USER: wordpress
  * WORDPRESS_DB_PASSWORD: wordpress
  * WORDPRESS_DB_NAME: wordpress
* Defina as seguintes variáveis para o mysql :
  * MYSQL_ROOT_PASSWORD: somewordpress
  * MYSQL_DATABASE: wordpress
  * MYSQL_USER: wordpress
  * MYSQL_PASSWORD: wordpress
* Defina o volume db_data para o mysql;
* Utilize o parâmetro depends_on para criar dependência entre os serviços;
* Adicione a política de restart com o valor always aos serviços;
* Suba os serviços utilizando docker-compose e abra no terminal para validar o * funcionamento.