import express from 'express';
 
import routes from '../routes/index';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

export default server;
