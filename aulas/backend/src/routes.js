const express = require('express');

const OngControlller = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentController')

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.creat)

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.creat);

module.exports = routes;