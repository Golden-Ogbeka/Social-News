import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import db from './db/index.js';
import cors from 'cors';
import helmet from 'helmet';
import AppRouters from './routes/index.js';

// To use __dirname and __filename when node app is in module mode
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database Initialization
db();

const DEFAULT_SERVER_PORT = 4000;
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes
server.use('/api', AppRouters);

// Added after all routes because of React's routing
server.use(express.static(path.join(__dirname, 'client', 'build')));

server.get('/*', async function (req, res) {
	res.sendFile(path.join(__dirname, 'client', '/build/index.html'));
});

server.listen(process.env.PORT || DEFAULT_SERVER_PORT, () => {
	console.log(
		`Server listening on port: ${process.env.PORT || DEFAULT_SERVER_PORT}`
	);
});
