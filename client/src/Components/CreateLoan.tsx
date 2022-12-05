import axios from "axios"
import {
    FC,
    ChangeEvent,
    useContext,
    useState,
    WheelEvent,
    FormEvent
} from "react"
import { ILoan } from "../Interfaces/ILoan"
import { AppContext } from "../Shared/AppContext"
import { CancelButton, SubmitButton } from "../Styles/CreateLoanStyles"
import { GreenSpan } from "../Styles/SharedStyles"

const CreateLoan: FC = (): JSX.Element => {
    //context
    const { url, setIfCreationFormIsOpen } = useContext(AppContext)

    //state
    const [loan, setLoan] = useState<string>("")
    const [originalAmount, setOriginalAmount] = useState<number>(0)
    const [currentAmount, setCurrentAmount] = useState<number>(0)
    const [lender, setLender] = useState<string>("")
    const [interestRate, setInterestRate] = useState<number>(0)

    const createNewLoan = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        let loanData: ILoan = {
            loan: loan,
            originalAmount: originalAmount,
            currentAmount: currentAmount,
            lender: lender,
            interestRate: interestRate
        }
        axios
            .post<ILoan>(`${url}/createloan`, loanData)
            .then((response) => console.log(response.data))
            .catch((error) => console.warn(error))
            .then(() => setIfCreationFormIsOpen(false))
    }

    return (
        <div
            style={{
                backgroundColor: "#f7c59f",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "5rem 10px 0 10px",
                paddingTop: "15px",
                paddingRight: "25%",
                textAlign: "right"
            }}>
            <form onSubmit={createNewLoan}>
                <label>
                    Loan name:{" "}
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
                    Original amount: <GreenSpan>$</GreenSpan>
                    <input
                        style={{ textAlign: "right" }}
                        required
                        type="number"
                        step="0.01"
                        value={originalAmount}
                        onWheel={(e: WheelEvent<HTMLInputElement>) =>
                            e.currentTarget.blur()
                        }
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setOriginalAmount(Number(e.target.value))
                        }
                    />
                </label>
                <br />
                <label>
                    Current amount: <GreenSpan>$</GreenSpan>
                    <input
                        style={{ textAlign: "right" }}
                        required
                        type="number"
                        step="0.01"
                        value={currentAmount}
                        onWheel={(e: WheelEvent<HTMLInputElement>) =>
                            e.currentTarget.blur()
                        }
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCurrentAmount(Number(e.target.value))
                        }
                    />
                </label>
                <br />
                <label>
                    Lender:{" "}
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
                    Interest Rate:{" "}
                    <input
                        style={{ textAlign: "right" }}
                        required
                        type="number"
                        step="0.001"
                        onWheel={(e: WheelEvent<HTMLInputElement>) =>
                            e.currentTarget.blur()
                        }
                        value={interestRate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setInterestRate(Number(e.target.value))
                        }
                    />
                    <GreenSpan>%</GreenSpan>
                </label>
                <br />
                <CancelButton onClick={() => setIfCreationFormIsOpen(false)}>
                    Cancel
                </CancelButton>
                <SubmitButton type="submit" value="Submit New Loan" />
            </form>
        </div>
    )
}

export default CreateLoan
