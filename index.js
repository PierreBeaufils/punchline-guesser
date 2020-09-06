require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const router = require('./app/router');
const multer = require('multer');

const port = process.env.PORT || 3000;
const server = express();

//Parse request body on api side et alimenter req.body with an object
const bodyParser = multer();


server.use(express.static(__dirname + '/public'));

// Authorize access to everyone
server.use(cors({
    origin: '*',
}));


// get access to req.body
server.use(express.urlencoded({
    extended: true,
}));


// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
server.use(bodyParser.none());


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