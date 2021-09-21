const swaggerUi = require('swagger-ui-express');
const router = require('express').Router();
const apiDocs = require('../api-docs.json');
const {
	getAllResidents,
	addNewResident,
	editResident,
	deleteResident,
} = require('../handlers/residents');

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(apiDocs));

router.post(`${process.env.API_PREFIX}/residents`, addNewResident);
router.get(`${process.env.API_PREFIX}/residents`, getAllResidents);
router.put(`${process.env.API_PREFIX}/residents/:id`, editResident);
router.delete(`${process.env.API_PREFIX}/residents/:id`, deleteResident);

module.exports = router;
