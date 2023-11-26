const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imgURLs:       [{ type: String, required: true }],
    imgs:          [{ type: String, required: true }],
    title:          { type: String, required: true },
    location:       { type: String, required: true },
    description:    { type: String, required: true },
    date:           { type: String, required: true },
    guests:         { type: Number, required: true },
    bedrooms:       { type: String, required: true },
    baths:          { type: String, required: true },
    offers:         { type: String, required: true },
    price:          { type: Number, required: true }
})

module.exports = mongoose.model('Product', productSchema)