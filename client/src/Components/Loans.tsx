import axios from "axios"
import { FC, useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import { CompleteTodoButton, CreateTodoButton, DeleteTodoButton,
FullTodosContainer, GreenSpan, RedSpan, TodoItem, TodosContainer,
TodosInfo, TodosTitle, TodosTitleContainer } from "../Styles/HomeStyles"

const Loans:FC = () => {

    //context
    const {url} = useContext(Context)

    //state
    const [loans, setLoans] = useState([])

    //get all loans sorted by most recent first
    useEffect(() => {
        axios.get(`${url}/getloans`)
            .then(response => setLoans(response.data))
            .catch(error => console.warn(error))
    })

    //delete a loan
    const removeLoan = (id) => {
        axios.delete(`${url}/removeloan/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    //update a loan to be completed
    const completeLoan = (id) => {
        axios.put(`${url}/completeloan/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    //open creation form
    const openCreationForm = () => {
        // setIfCreationFormIsOpen(true)
    }

    return (
        <FullTodosContainer>
            <TodosTitleContainer>
                <TodosTitle>Todos</TodosTitle>
                <CreateTodoButton onClick={openCreationForm}>Create Task</CreateTodoButton>
            </TodosTitleContainer>
            {/* {ifCreationFormIsOpen && <CreateTodo/>} */}
            <TodosContainer>
                {loans.map((loan, index) => (
                    <TodosInfo key={index}>
                        <TodoItem><h5>Loan: <GreenSpan>{loan.loan}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Author: <GreenSpan>{loan.author}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Due: <GreenSpan>{loan.dueDate}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Done: <GreenSpan>{loan.isDone ? "yes" : <RedSpan>no</RedSpan>}</GreenSpan></h5></TodoItem>
                        <DeleteTodoButton onClick={() => removeLoan(loan._id)}>Remove</DeleteTodoButton>
                        <CompleteTodoButton onClick={() => completeLoan(loan._id)}>Mark loan as complete</CompleteTodoButton>
                    </TodosInfo>
                ))}
            </TodosContainer>
            <br/>
        </FullTodosContainer>
    )
}

export default Loans