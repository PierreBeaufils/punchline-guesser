require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const router = require('./app/router');
const multer = require('multer');
const bodyParser = multer(); // Parse request body on api side et alimenter req.body with an object
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;

const server = express();

// get access to req.body
server.use(express.urlencoded({
    extended: true,
}));

// server.use(cookieParser());

server.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    exposedHeaders: 'x-auth-token',
    preflightContinue: false,
}));

/*
server.use((req, res, next) => {
    // on autorise explicitement le domaine du front
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // on autorise le partage du cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // on autorise le partage de ressources entre origines
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
*/
server.use(express.json());
// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
server.use(bodyParser.none());

// middleware to escape html in req.body
server.use((req, res, next) => {
    if (req.body) {
        for (const property in req.body) {
            req.body[property] = sanitizeHtml(req.body[property]);
        }
    }
    next();
});

server.use(router);

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});