const categoriesModel = require("../models/categoriesModel");

module.exports= {

    getAll: async (req, res, next) => {
  
         console.log(req.query)
         const category = await categoriesModel.find({})   
         res.json(category);
    },

    
    create: function(req, res, next) {
        console.log(req.body);
        
        const category = new categoriesModel({

            name: req.body.name, 

        })

        category.save();
        
        res.json(category);
    },



} 