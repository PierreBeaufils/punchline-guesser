require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const router = require('./app/router');
const multer = require('multer');

const port = process.env.PORT || 3000;
const server = express();

//server.set('view engine', 'ejs');
//server.set('views', 'app/views');

//Parse request body on api side et alimenter req.body with an object
const bodyParser = multer();

// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
server.use(bodyParser.none());

// Authorize access to everyone
server.use((req, res, next) => {
    // on autorise explicitement le domaine du front
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    // on autorise le partage du cookie
    res.header('Access-Control-Allow-Credentials', true);
    // on autorise le partage de ressources entre origines
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//server.use(express.static('./public'));

// get access to req.body
server.use(express.urlencoded({
    extended: true,
}));

// middleware to escape html in req.body
server.use((req, res, next) => {
    // je vais modifier tout ce qu'il pourrait y avoir dans req.body
    if (req.body) {
        for (const property in req.body) {
            req.body[property] = sanitizeHtml(req.body[property]);
        }
    }
    // puis passer au middleware suivant
    next();
});


server.use(router);

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});