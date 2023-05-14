const User = require('../models/users')

const createUser = async (req,res, next) => {
    console.log(req.body)
    const user = new User ({
        firstName: req.body.firstName,
        email: req.body.email
    })
    const result = await user.save()

    res.send(result)
}



module.exports = createUser