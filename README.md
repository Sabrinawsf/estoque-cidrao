# Sistema de Controle de Estoque - Cidrão Bolos 🎂

Este projeto é uma aplicação web para controle de insumos em estoque, utilizando **Spring Boot (backend)** e **Angular 19 (frontend)**.

---

## Tecnologias Utilizadas

- Java 17
- Spring Boot 3.4.4
- MySQL 8
- Angular 19
- Maven

---

##  Como Rodar o Projeto

# Como Acessar e Executar o Projeto

Este documento descreve os passos necessários para configurar e executar o backend em Spring Boot e o frontend em Angular.

---

## Pré-requisitos

- Java 17 ou superior
- MySQL instalado e configurado
- Node.js (v20 ou superior)
- Angular CLI (versão 19)
- IDE (IntelliJ, Eclipse ou VS Code recomendado)

---

## Backend - Spring Boot

### Configuração do Banco de Dados

1. Abra o MySQL Workbench ou qualquer outra interface MySQL que você prefira.
2. Execute o seguinte comando SQL para criar o banco de dados:

```sql
CREATE DATABASE IF NOT EXISTS CidraoBolos;
```

3. Altere a senha do banco de dados no arquivo de configuração (`application.properties`):

```properties
spring.datasource.password=suaNovaSenha
```

### Execução do Backend

1. Navegue até a pasta do backend (onde está o `pom.xml`):

```bash
cd C:/GAMES/DEVELOPMENT/VSCode/demo/demo
```

2. Execute o projeto com o Maven:

```bash
mvn clean spring-boot:run
```

3. Acesse no navegador para testar:

```
http://localhost:8080/insumos/teste
```

Você deverá ver a mensagem:
```
aplicação funcionando
```

Para acessar os insumos:
```
http://localhost:8080/insumos
```

---

## Frontend - Angular 19

1. Navegue até o diretório raiz do frontend no terminal:

```bash
cd C:/GAMES/DEVELOPMENT/VSCode/Cidrao-front
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
ng serve
```

4. O frontend ficará disponível em:
```
http://localhost:4200
```

---

## Testando a Aplicação

Após ambos os servidores estarem rodando, acesse o frontend (`http://localhost:4200`) pelo navegador para interagir com a aplicação. 

O frontend faz requisições para a API do backend em `http://localhost:8080/insumos`.

---

## Notas Adicionais

- Certifique-se que as portas `8080` e `4200` estejam liberadas e não estejam sendo usadas por outro aplicativo.
- Evite copiar e colar URLs com quebras de linha. Digite-as manualmente no navegador, se necessário.
- Use ferramentas como Postman para testar os endpoints REST.

---



### 🖥️ Backend (Spring Boot)

1. Certifique-se de ter o MySQL rodando localmente.
2. Atualize o arquivo `application.properties` com sua senha do banco:
3. Evite copiar e colar URLs com quebras de linha. Digite-as manualmente no navegador, se necessário.
4. Use ferramentas como Postman para testar os endpoints REST.

```properties
spring.datasource.password=SUA_SENHA_AQUI
