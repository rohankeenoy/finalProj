const User = require('../models/users')

const createPost = async (req,res, next) => {
    console.log(req.body)
    const post = new User ({
        email: req.body.email,
        title: req.body.title,
        article: req.body.article
    })
    const result = await user.save()

    res.send(result)
}



module.exports = createPost