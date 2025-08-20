const express = require('express');
const router = express.Router();
const {handleUpload} = require('../controllers/uploadController');
const {parseAndValidateCSV} = require('../middlewares/uploadMiddleware');

router.post('/upload', parseAndValidateCSV, handleUpload);

module.exports = router;