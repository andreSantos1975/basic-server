const express = require('express');
const router = express.Router();

router.post('/wallpapers', (req, res) => {
    res.status(200).json({
        success: true,
    })
})

module.exports = router;