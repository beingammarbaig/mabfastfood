const express = require('express')
const router = express.Router()
const Dessert = require('./dessert')

router.post("/dessert", async (req, res)=>{
    try {
        await Dessert.create({
            name: req.body.name,
            url: req.body.url,
            desc: req.body.desc,
            price: req.body.price
        })
        // await user.create({
        //     name: "Ammar",
        //     pass: "1234"

        // })
        res.json({success: true})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

module.exports = router;