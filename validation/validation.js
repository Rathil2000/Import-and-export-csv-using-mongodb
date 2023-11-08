const Joi = require('joi');
const definition = [{ username: true, email: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/]}];
const data = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required(),
        mobile:Joi.number().required(),
        address: Joi.string().required(),
        company: Joi.number()
       
      }),
}


module.exports=data;