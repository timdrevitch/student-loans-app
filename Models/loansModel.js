//this is the schema/collection model for MongoDB Atlas
const mongoose = require("mongoose")

const loansSchema = new mongoose.Schema(
    {
        loan: {
            type: String,
            trim: true
        },
        originalAmount: {
            type: Number,
            trim: true
        },
        currentAmount: {
            type: Number,
            trim: true
        },
        lender: {
            type: String,
            trim: true
        },
        interestRate: {
            type: Number,
            trim: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Loan", loansSchema)
