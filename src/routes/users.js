const { Router } = require('express');
const {getAllusers} = require('../controller/price.controller.js');

const router = Router();

router.get('/', getAllusers);

module.exports = router;