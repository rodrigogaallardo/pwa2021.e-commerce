module.exports= {

    getAll: function(req, res, next) {
  
        //esto saldria de la base de datos
        const productos = [
            {
                id: 1,
                name: "Moto G",
                price: 1000
            },
            {
                id: 2,
                name: "Moto z",
                price: 2000
            }
        ]
         console.log(req.query)   
         res.json(productos);
    },

    getbyID: function(req, res, next) {
  
        //esto saldria de la base de datos
        const producto = [
            {
                id: 1,
                name: "Moto G",
                price: 1000
            },
            {
                id: 2,
                name: "Moto z",
                price: 2000
            },
        ]
        res.json(producto);
    },

    create: function(req, res, next) {
        console.log(req.body) 
        res.json(req.body);
    },

    update: function(req, res, next) {
        console.log(req.body, req.params.id) 
        res.json(req.body);
    },

    delete: function(req, res, next) {
        console.log(req.params.id) 
        res.json({});
    },

} 