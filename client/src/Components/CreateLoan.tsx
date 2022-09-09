import axios from "axios"
import { FC, ChangeEvent, useContext, useState } from "react"
import { ILoan } from "../Interfaces/ILoan"
import { AppContext } from "../Shared/AppContext"

const CreateLoan: FC = (): JSX.Element => {
    //context
    const { url, setIfCreationFormIsOpen } = useContext(AppContext)

    //state
    const [loanName, setLoanName] = useState<string>("")
    const [originalAmount, setOriginalAmount] = useState<number>(0)
    const [currentAmount, setCurrentAmount] = useState<number>(0)
    const [lender, setLender] = useState<string>("")
    const [interestRate, setInterestRate] = useState<number>(0)

    //create a new loan
    const createNewLoan = (): void => {
        let loanData: ILoan = {
            loan: loanName,
            originalAmount: originalAmount,
            currentAmount: currentAmount,
            lender: lender,
            interestRate: interestRate
        }
        axios
            .post(`${url}/createloan`, loanData)
            .then((response: any) => console.log(response.data))
            .catch((error: Error) => console.warn(error))
            .then(() => setIfCreationFormIsOpen(false))
    }

    const changeLoan = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "loan") {
            setLoanName(e.target.value)
        }
    }
    const changeOriginalAmount = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "originalAmount") {
            setOriginalAmount(Number(e.target.value))
        }
    }
    const changeCurrentAmount = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "currentAmount") {
            setCurrentAmount(Number(e.target.value))
        }
    }
    const changeLender = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "lender") {
            setLender(e.target.value)
        }
    }
    const changeInterestRate = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "interestRate") {
            setInterestRate(Number(e.target.value))
        }
    }

    return (
        <div
            style={{
                backgroundColor: "#1a1d22",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "5rem 10px 0 10px"
            }}>
            <form onSubmit={createNewLoan}>
                <label htmlFor="loan">Loan name: </label>
                <input
                    type="text"
                    id="loan"
                    name="loan"
                    value={loanName}
                    onChange={changeLoan}
                    required
                />
                <br />
                <label htmlFor="originalAmount">Original amount: </label>
                <input
                    type="number"
                    id="originalAmount"
                    name="originalAmount"
                    value={originalAmount}
                    onChange={changeOriginalAmount}
                    required
                />
                <br />
                <label htmlFor="currentAmount">Current amount: </label>
                <input
                    type="number"
                    id="currentAmount"
                    name="currentAmount"
                    value={currentAmount}
                    onChange={changeCurrentAmount}
                    required
                />
                <br />
                <label htmlFor="lender">Lender: </label>
                <input
                    type="text"
                    id="lender"
                    name="lender"
                    value={lender}
                    onChange={changeLender}
                    required
                />
                <br />
                <label htmlFor="interestRate">Interest Rate: </label>
                <input
                    type="number"
                    id="interestRate"
                    name="interestRate"
                    value={interestRate}
                    onChange={changeInterestRate}
                    required
                />
                <br />
                <button
                    onClick={() => setIfCreationFormIsOpen(false)}
                    style={{
                        cursor: "pointer",
                        display: "inline-block",
                        backgroundColor: "darkred",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                        padding: ".5rem 1rem",
                        margin: "1rem",
                        fontFamily: "Trebuchet MS, sans-serif"
                    }}>
                    Cancel
                </button>
                <input
                    type="submit"
                    value="Submit new task"
                    style={{
                        cursor: "pointer",
                        display: "inline-block",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                        padding: ".5rem 1rem",
                        margin: "1rem",
                        fontFamily: "Trebuchet MS, sans-serif"
                    }}
                />
            </form>
        </div>
    )
}

export default CreateLoan
