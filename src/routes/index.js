const {Router} = require('express');
const router= Router();

router.get('/test',(req,res)=>{
    const data ={
        "name":"Yukn",
        "website":"www.yukn.com"
    }
    res.json(data);
})

module.exports=router;
