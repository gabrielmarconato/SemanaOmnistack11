const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/** 
 *   Métodos HTTP:
 * 
 *   GET: buscar informações no back-end
 *   POST: Criar informação no back-end
 *   PUT: Alterar informação no back-end
 *   DELETE: Deletar informação no back-end
*/

/**
 *  Tipos de Parâmetros:
 * 
 *  Query: Parametros nomeados enviados na rota após o '?' (Filtros/Paginação)
 *  Route: Parametros utilizados para identificar recursos 
 *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 * 
 * 
 */



