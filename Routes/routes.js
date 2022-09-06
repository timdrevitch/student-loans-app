const router = require("express").Router()

let Loan = require("../Models/loansModel")

//Find all loans
router.route("/getloans").get((req, res) => {
    Loan.find()
        .sort({ _id: -1 })
        .then((Loan) => res.json(Loan))
        .catch((err) => res.status(400).json("Error: " + err))
})

//Delete loan
router.route("/removeloan/:id").delete((req, res) => {
    Loan.findByIdAndDelete({ _id: req.params.id })
        .then(res.json("Loan deleted"))
        .catch((err) => res.status(400).json("Error: " + err))
})

//Complete loan
router.route("/completeloan/:id").put((req, res) => {
    Loan.updateOne({ _id: req.params.id }, { $set: { isDone: true } })
        .then(() => res.json("Loan completed"))
        .catch((err) => res.status(400).json("Error: " + err))
})

//Create new loan
router.route("/createloan").post((req, res) => {
    const loan = req.body.loan
    const originalAmount = req.body.originalAmount
    const currentAmount = req.body.currentAmount
    const lender = req.body.lender
    const interestRate = req.body.interestRate
    const newLoan = new Loan({
        loan,
        originalAmount,
        currentAmount,
        lender,
        interestRate
    })
    newLoan
        .save() //save loan to db
        .then((Loan) => res.json(Loan))
        .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
