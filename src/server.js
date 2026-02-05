// const http = require('http');
import http from 'node:http';

// criar um usuário (nome, email, senha)

// GET => Buscar um recurso do back-end
// POST =>Criar um recurso no back-end
// PUT  => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Remover um recurso no back-end

const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method, url);
    return res.end(`Method: ${method}, URL: ${url}`);
    // console.log('Servidor rodando');
});

server.listen(3333);
// import fastify from 'fastify';
//CommonJS = require
//Aplicações HTTP => APIs

// ESModules => import/export

