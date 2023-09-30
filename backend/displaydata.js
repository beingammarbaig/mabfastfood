const express = require('express')
const router = express.Router()

router.post('/appetizer',(req, res)=>{
    console.log("s")
    try {
        res.send([global.menu])
        console.log(global.menu)
    } catch (error) {
        res.send("Server Error")
        console.log("Server error")
        
    }
})

module.exports = router;