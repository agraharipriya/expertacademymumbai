const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    className: String,
    subject: String,
    email: String,
    phone: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);