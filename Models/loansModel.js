//this is the schema/collection model for MongoDB Atlas
const mongoose = require("mongoose")

const loansSchema = new mongoose.Schema({
    loan: {
        type: String,
        trim: true,
    },
}, {timestamps: true})

module.exports = mongoose.model("Loan", loansSchema)
