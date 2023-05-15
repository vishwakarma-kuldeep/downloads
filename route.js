const router = require("express").Router();
const downloadController = require("./controllers/download");

router.post('/download',downloadController.addData);

module.exports  = router;