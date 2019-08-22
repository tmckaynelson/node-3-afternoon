const create = (req, res) => {

    const { name, description, price, image_url } = req.body

    const db = req.app.get('db')
    db.create_product([name, description, price, image_url]).then(() => {
        res.status(200).send('create succesful')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
}

const getOne = (req, res) => {
    
    const { id } = req.params

    const db = req.app.get('db')
    db.read_product([id]).then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
}

const getAll = (req, res) => {

    const db = req.app.get('db')
    db.read_products().then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
}

const update = (req, res) => {

    const { id } = req.params
    const { description } = req.query

    const db = req.app.get('db')
    db.update_product([description, id]).then(() => {
        res.status(200).send('update successful')
    })
    .catch(error => {
        console.log(error)

        res.status(500).send(error)
    })
}

const deleteProduct = (req, res) => {

    const { id } = req.params

    const db = req.app.get('db')
    db.delete_product([id]).then(() => {
        res.status(200).send('delete successful')
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProduct
}