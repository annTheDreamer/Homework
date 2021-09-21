const swaggerUi = require('swagger-ui-express');
const apiDocs = require('../api-docs.json');
const { logIn, logOut } = require('../controllers/auth');
const router = require('express').Router();
const piperkiController = require('../controllers/piperki');
const { validateJWTHandler } = require('../middleware/jwt');

router.get('/piperki', piperkiController.getAllPiperki);
router.get('/piperki/:id', piperkiController.getPiperkaById);
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(apiDocs));
router.post(`${process.env.API_PREFIX}/login`, logIn);
router.post(`${process.env.API_PREFIX}/logout`, validateJWTHandler, logOut);

module.exports = router;
