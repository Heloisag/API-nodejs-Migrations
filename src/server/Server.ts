// Fica com o código base do servidor express

import express from 'express';


const server = express();


server.get('/', (req, res) => {

    return res.send('Olá, DEV!');
});


export { server };
