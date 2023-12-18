const express = require('express')
const router = express.Router()


//----------- All Home Routes --------------//

router.get('/company/profile', (req, res) =>{
    return res.json({status: 'pending'})
})

router.get('/tier1_city', (req, res) => {
    return res.json({status: 'pending'})
})




module.exports = router;
