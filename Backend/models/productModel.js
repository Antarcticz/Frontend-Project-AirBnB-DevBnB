const Product = require('../schemas/productSchema');

exports.createNewProduct = (req, res) => {
    const { imgURLs, title, host, location, description, date, guests, bedrooms, baths, offers, price } = req.body;
    const imgs = req.body.imgs || []
    if (!imgURLs || !imgs || !title || !host || !location || !description || !date || !guests || !bedrooms || !baths || !offers || !price) {
        res.status(400).json({
            message: 'You need to enter all the fields'
        })
        return
    }
    Product.create({ imgURLs, title, host, location, description, date, guests, bedrooms, baths, offers, price })
        .then(data => res.status(201).json(data))
        .catch(() => res.status(500).json({ message: 'Someting went wrong when adding the product' }))
}

exports.getProducts = (req, res) => {
    Product.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(() => {
            res.status(500).json({ message: 'Could not get the products' })
        })
}

exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                res.status(404).json({ message: 'could not find that product' })
                return
            }
            res.status(200).json(product)
        })
        .catch(() => {
            res.status(500).json({ message: 'Someting went wrong' })
        })
}

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(product => {
            if (!product) {
                res.status(404).json({ message: 'could not find that product' })
                return
            }
            res.status(200).json(product)
        })
        .catch(() => {
            res.status(500).json({ message: 'Someting went wrong when updating the product' })
        })

}

exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => {
            if (!product) {
                res.status(404).json({ message: 'could not find that product' })
                return
            }
            res.status(200).json({ id: product._id })
        })
        .catch(() => {
            res.status(500).json({ message: 'Someting went wrong when deleteing the product' })
        })
}