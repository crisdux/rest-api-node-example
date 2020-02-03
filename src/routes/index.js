const {Router} = require('express');
const router = Router();

router.get('/test',(req,res)=>{
    const data = {
        "nombre": "Cristian",
        "apellido":"Villca",
        "edad":23,
        "direccion":{
            "zona":"obrajes",
            "calle": 17,
            "avenida": "Tomas Monje",
            "numero":26
        }
    };
    res.json(data);
});

module.exports = router;