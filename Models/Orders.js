const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId: {
        type: Number,
        required: true
    },
    placedOn: {
        type: String,
        
    },
    address: {
        type: String,
        
    },
    items: {
        type: Array,
        
    },
    Amount: {
        type: Number,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('orders', ordersSchema, 'orders');

