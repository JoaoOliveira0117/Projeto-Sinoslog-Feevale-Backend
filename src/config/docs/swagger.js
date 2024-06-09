import swaggerJsDoc from 'swagger-jsdoc';
import swaggerSchemas from './schemaConfig.js';

const options = async () => {
  const schemas = await swaggerSchemas();

  return {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Projeto Feevale - API Documentation',
        version: '1.0.0',
        description: 'Documentação da API',
      },
      components: {
        schemas: schemas,
      },
    },
    apis: ['./src/controllers/**/*.js'], // Caminho para os arquivos que contêm as definições das rotas
  };
};

const specs = options().then((op) => swaggerJsDoc(op));

export default specs;
