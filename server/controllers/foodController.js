const Food = require('../models/foodModel.js')

function createFood (req, res){
    const {foodName} = req.body
    Food.create({foodName: foodName},
        (err, food)=> {
            if(err) {
                next({
                    log: 'create food err',
                    status: 400,
                    message: { err: 'something wrong with createfood middleware'} 
                  })
                } else {
                  res.locals.food = food;
            }
        })
};

// export default createFood