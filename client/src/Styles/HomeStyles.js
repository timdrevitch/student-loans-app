import styled from "styled-components"

export const FullTodosContainer = styled.div`
    width: 65%;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2rem;
    background-color: #282c34;
`
export const TodosTitleContainer = styled.div`
    position: absolute;
    width: 65%;
`
export const TodosTitle = styled.h1`
    float: left;
    margin: 10px;
`
export const CreateTodoButton = styled.button`
    cursor: pointer;
    background-color: darkgreen;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    float: right;
    margin: 10px;
`
export const TodosContainer = styled.div`
    margin-top: 5rem;
`
export const TodosInfo = styled.div`
    background-color: #1a1d22;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
`
export const CompleteTodoButton = styled.button`
    cursor: pointer;
    display: inline-block;
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    padding: .5rem 1rem;
    margin: 1rem;
    font-family: Trebuchet MS, "sans-serif";
`
export const DeleteTodoButton = styled.button`
    cursor: pointer;
    display: inline-block;
    background-color: darkred;
    color: white;
    border: none;
    border-radius: 3px;
    padding: .5rem 1rem;
    margin: 1rem;
    font-family: Trebuchet MS, "sans-serif";
`
export const TodoItem = styled.div`
    display: inline-block;
    margin: 1rem;
`
export const GreenSpan = styled.span`
    color: green;
`
export const RedSpan = styled.span`
    color: red;
`