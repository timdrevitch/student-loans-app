import axios from "axios"
import { FC, useContext, useEffect, useState } from "react"
import { ILoan } from "../Interfaces/ILoan"
import { AppContext } from "../Shared/AppContext"
import {
    CompleteTodoButton,
    CreateTodoButton,
    DeleteTodoButton,
    FullTodosContainer,
    GreenSpan,
    RedSpan,
    TodoItem,
    TodosContainer,
    TodosInfo,
    TodosTitle,
    TodosTitleContainer
} from "../Styles/HomeStyles"
import CreateLoan from "./CreateLoan"

const Loans: FC = (): JSX.Element => {
    //context
    const { url, ifCreationFormIsOpen, setIfCreationFormIsOpen } =
        useContext(AppContext)

    //state
    const [loans, setLoans] = useState<ILoan[]>([])

    //get all loans sorted by most recent first
    useEffect(() => {
        axios
            .get(`${url}/getloans`)
            .then((response: any) => setLoans(response.data))
            .catch((error: Error) => console.warn(error))
    })

    //delete a loan
    const removeLoan = (id: String): void => {
        axios
            .delete(`${url}/removeloan/${id}`)
            .then((response) => console.log(response))
            .catch((error) => console.warn(error))
    }

    // //update a loan to be completed
    // const completeLoan = (id: String):void => {
    //     axios
    //         .put(`${url}/completeloan/${id}`)
    //         .then((response) => console.log(response))
    //         .catch((error) => console.warn(error))
    // }

    //open creation form
    const openCreationForm = (): void => {
        setIfCreationFormIsOpen(true)
    }

    return (
        <FullTodosContainer>
            <TodosTitleContainer>
                <TodosTitle>Loans ({loans.length})</TodosTitle>
                <CreateTodoButton onClick={openCreationForm}>
                    Create Loan
                </CreateTodoButton>
            </TodosTitleContainer>
            {ifCreationFormIsOpen && <CreateLoan />}
            <TodosContainer>
                {loans.map((loan, index) => (
                    <TodosInfo key={index}>
                        <TodoItem>
                            <h5>
                                Loan: <GreenSpan>{loan.loan}</GreenSpan>
                            </h5>
                        </TodoItem>
                        <TodoItem>
                            <h5>
                                Interest Rate:{" "}
                                <GreenSpan>{loan.interestRate}%</GreenSpan>
                            </h5>
                        </TodoItem>
                        <TodoItem>
                            <h5>
                                Original Amount:{" "}
                                <GreenSpan>${loan.originalAmount}</GreenSpan>
                            </h5>
                        </TodoItem>
                        <TodoItem>
                            <h5>
                                Current Amount:{" "}
                                <GreenSpan>${loan.currentAmount}</GreenSpan>
                            </h5>
                        </TodoItem>
                        <TodoItem>
                            <h5>
                                Daily Accrual:{" "}
                                <GreenSpan>
                                    $
                                    {(
                                        (loan.currentAmount *
                                            (loan.interestRate / 100)) /
                                        365
                                    ).toFixed(2)}
                                </GreenSpan>
                            </h5>
                        </TodoItem>
                        <TodoItem>
                            <h5>
                                Lender: <GreenSpan>{loan.lender}</GreenSpan>
                            </h5>
                        </TodoItem>
                        <DeleteTodoButton onClick={() => removeLoan(loan._id)}>
                            Remove
                        </DeleteTodoButton>
                        {/* <CompleteTodoButton onClick={() => completeLoan(loan._id)}>Mark loan as complete</CompleteTodoButton> */}
                    </TodosInfo>
                ))}
            </TodosContainer>
            <br />
        </FullTodosContainer>
    )
}

export default Loans
