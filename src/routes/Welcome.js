const { Router } = require('express');
const {getWelcome} = require("../controller/welcome.controller.js");

const router = Router();

router.get('/', getWelcome);

module.exports = router;
