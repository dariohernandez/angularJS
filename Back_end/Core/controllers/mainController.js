const router = require('express').Router();
//const manejadorError = require('../bin/functions/manejadorError.js');
//const sendReply = require('../bin/functions/sendResponse.js');


router.get('/', function (req, res, next) {
	res.send("Pagina index");
});

router.use('/producto', require("./productoController.js"));


module.exports = router;