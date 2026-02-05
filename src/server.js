// const http = require('http');
import http from 'node:http';

// criar um usuário (nome, email, senha)

// GET => Buscar um recurso do back-end
// POST =>Criar um recurso no back-end
// PUT  => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Remover um recurso no back-end


// GET/users => Buscando usuários no back-end
// POST/users => Criando um usuário no back-end
// PUT/users/123 => Atualizando o usuário de ID 123 no back-end
// DELETE/users/123 => Removendo o usuário de ID 123 no back-end

const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method, url);
    
    if (method == 'GET' && url === '/users') {
        return res.end('Listagem de usuários');
    }

    if (method == 'POST' && url === '/users') {
        return res.end('Criação de um usuário');
    }

});

server.listen(3333);
// import fastify from 'fastify';
//CommonJS = require
//Aplicações HTTP => APIs

// ESModules => import/export

