const mongoose = require('mongoose');
const apiSchema = new mongoose.Schema({
    apiName: {
        type: String,
        required: true
    },
    apiData: {
        type: String,
        required: true
    },
    apiTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('FirstApi', apiSchema);