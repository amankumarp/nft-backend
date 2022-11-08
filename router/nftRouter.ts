const express = require('express');
const {allNft} = require('../controllers/nft');
const router = express.Router();

router.get('/all', allNft);
module.exports = router;
