docker command to add mysql
"docker run -d -p 3306:3306 --rm -v mysqldata:/var/lib/mysql -e MYSQL-ROOT_PASSWORD='test' mysql:latest"
