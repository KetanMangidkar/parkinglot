
require("dotenv").config();

const mongoose = require('mongoose');

const connect = process.env.mongoURI;

module.exports = () => {
    mongoose.connect(connect)
}
