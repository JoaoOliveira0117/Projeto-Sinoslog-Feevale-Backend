# SinosLog Backend - Projeto UNIVERSIDADE FEEVALE

Servidor Backend desenvolvida em nodeJS;

## O que é?

API disponibilizando funcionalidades necessárias para a execução da [aplicação mobile SinosLog](https://github.com/JoaoOliveira0117/projetofeevale-MeioAmbiente);

Permite a criação de usuários, ocorrências e implementa validações de campos e autenticação;

## Como funciona?

Antes de executar a aplicação, crie um arquivo `.env` baseado na configuração do arquivo `.env.example`;

Após isso você pode rodar a aplicação em um container utilizando docker:

```sh
# Considerando que o usuário já possui Node e NPM instalados na máquina;
npm run docker:up
```

Caso queira rodar a aplicação fora de um container, pode executar os comandos:

### Em caso de execução local fora de container é necessário possuir um banco de dados MONGODB configurado e inserir sua URI na variável: `MONGO_URI` no arquivo `.env`

```sh
# Instala as dependências
npm install

# Roda a aplicação em modo desenvolvimento
npm run dev

# Roda a aplicação em modo produção
npm run start
```

## Documentação

Após executar a aplicação, a documentação pode ser encontrada no endpoint:

```sh
# http://localhost:3000/api-docs por exemplo
<your_api_URL_here>/api-docs
```

<sub>Projeto de estudo desenvolvido para Universidade Feevale, não existe nenhum incentivo do governo para o desenvolvimento deste projeto.</sub>

