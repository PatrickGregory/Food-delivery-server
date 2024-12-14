const express = require('express');
const ExpressFormidable = require('express-formidable');
const {ImageUpload} = require('../controller/imageUpload');
router = express.Router();

router.post('/upload-image',ExpressFormidable({maxFieldsSize: 5 * 2024 * 2024}),
ImageUpload)


module.exports = router;