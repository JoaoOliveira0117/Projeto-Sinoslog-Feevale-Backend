import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Projeto Feevale - API Documentation',
      version: '1.0.0',
      description: 'Documentação da API',
    },
  },
  apis: ['./src/routes/**/*.js'], // Caminho para os arquivos que contêm as definições das rotas
};

const specs = swaggerJsDoc(options);

export default specs;
