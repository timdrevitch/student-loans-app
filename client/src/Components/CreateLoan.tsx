import axios from "axios"
import { FC, ChangeEvent, useContext, useState } from "react"
import { ILoan } from "../Interfaces/ILoan"
import { AppContext } from "../Shared/AppContext"

const CreateLoan: FC = (): JSX.Element => {
    //context
    const { url, setIfCreationFormIsOpen } = useContext(AppContext)

    //state
    const [loan, setLoan] = useState<string>("")
    const [originalAmount, setOriginalAmount] = useState<number>(0)
    const [currentAmount, setCurrentAmount] = useState<number>(0)
    const [lender, setLender] = useState<string>("")
    const [interestRate, setInterestRate] = useState<number>(0)

    //create a new loan
    const createNewLoan = (): void => {
        let loanData: ILoan = {
            loan: loan,
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

    return (
        <div
            style={{
                backgroundColor: "#1a1d22",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "5rem 10px 0 10px"
            }}>
            <form onSubmit={createNewLoan}>
                <label>
                    Loan name:
                    <input
                        required
                        type="text"
                        value={loan}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setLoan(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Original amount:
                    <input
                        required
                        type="number"
                        value={originalAmount}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setOriginalAmount(Number(e.target.value))
                        }
                    />
                </label>
                <br />
                <label>
                    Current amount:
                    <input
                        required
                        type="number"
                        value={currentAmount}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCurrentAmount(Number(e.target.value))
                        }
                    />
                </label>
                <br />
                <label>
                    Lender:
                    <input
                        required
                        type="text"
                        value={lender}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setLender(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Interest Rate:
                    <input
                        required
                        type="number"
                        value={interestRate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInterestRate(Number(e.target.value))
                        }
                    />
                </label>
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
