import axios from "axios"
import { FC, useContext, useState } from "react"
import { Context } from "../Context"

const CreateLoan: FC = () => {

    //context
    const {url, setIfCreationFormIsOpen} = useContext(Context)

    //state
    const [loanName, setLoanName] = useState<string>("")

    //create a new loan
    const createNewLoan = () => {
        let data = {loan: loanName}
        axios.post(`${url}/createloan`, data)
            .then(response => console.log(response.data))
            .catch(error => console.warn(error))
            .then(() => setIfCreationFormIsOpen(false))
    }

    //Change state on input field changes
    const changeLoan = (e: React.ChangeEvent<HTMLInputElement>) => setLoanName(e.target.value)

    return (
        <div style={{backgroundColor: "#1a1d22", border: "1px solid black", borderRadius: "10px", margin: "5rem 10px 0 10px"}}>
            <form onSubmit={createNewLoan}>
                <label>Loan: </label>
                <input type="text" name="loan" value={loanName} onChange={changeLoan} required/>
                <br/>
                <button onClick={() => setIfCreationFormIsOpen(false)} style={{cursor: "pointer", display: "inline-block", backgroundColor: "darkred", color: "white", border: "none", borderRadius: "3px", padding: ".5rem 1rem", margin: "1rem", fontFamily: "Trebuchet MS, sans-serif"}}>Cancel</button>
                <input type="submit" value="Submit new task" style={{cursor: "pointer", display: "inline-block", backgroundColor: "green", color: "white", border: "none", borderRadius: "3px", padding: ".5rem 1rem", margin: "1rem", fontFamily: "Trebuchet MS, sans-serif"}}/>
            </form>
        </div>
    )
}

export default CreateLoan