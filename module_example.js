module.exports = (app) => {

    create: (req, res) => {
        res.json({
            msg: 'resource created'
        })
    }

    get: (req, res) => {
        app.model.user.get(req.params.id)
            .then(user => res.json(user))
    }
    

    return {
        create,
        get
    }

}

