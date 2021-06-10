const express = require('express')
const router = new express.Router()

router.get('/absentDays', async (req, res) => {

    try {
        res.send('9')
    } catch (e) {
        res.status(500).send(e)
    }

})

module.exports = router