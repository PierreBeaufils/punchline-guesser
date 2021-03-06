require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const router = require('./server/app/router');
const multer = require('multer');
const bodyParser = multer(); // Parse request body on api side et alimenter req.body with an object
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const server = express();
/*
if (ENV === 'production') {
    server.use(express.static(__dirname + '/client/dist'));
}
*/

// get access to req.body
server.use(express.urlencoded({
    extended: true,
}));


server.use(cors({
    origin: ['https://mambo7.postman.co', 'http://localhost:8080', 'http://localhost:3000', 'https://punchline-guesser.herokuapp.com'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token, x-access-token',
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

server.use('/api', router);

if (process.env.NODE_ENV !== 'production') {
    // Serve any static files
    server.use(express.static(path.join(__dirname, 'client/dist')));
    // Handle React routing, return all requests to React app

    server.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
    });
}

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});