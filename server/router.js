const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Currently, server is up to date and running')
});

module.exports = router;