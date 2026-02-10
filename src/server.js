// const http = require('http');
import http from 'node:http';
import { json } from './middlewares/json.js';


const users = [];

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);
    
    if (method == 'GET' && url === '/users') {
        return res.end(JSON.stringify(users));
    }



    if (method == 'POST' && url === '/users') {
        const { name, email } = req.body;
        users.push({
            id: users.length + 1,
            name: name,
            email: email,
        })
        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Rota não encontrada');

});

server.listen(3333);
// import fastify from 'fastify';
//CommonJS = require
//Aplicações HTTP => APIs

// ESModules => import/export

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


//stateful - Stateless
// Stateful => O servidor mantém o estado da aplicação, ou seja, ele lembra das informações do usuário durante a navegação. Ex: Sessões, cookies.
// Stateless => O servidor não mantém o estado da aplicação, ou seja, ele não lembra das informações do usuário durante a navegação. Ex: APIs RESTful.

//Json => JavaScript Object Notation => Formato de dados leve e fácil de ler e escrever. Utilizado para troca de dados entre cliente e servidor.