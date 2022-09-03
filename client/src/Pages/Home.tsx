import {FC} from "react"
import Loans from "../Components/Loans"

const Home:FC = () => {

    return (
        <div style={{width: "100%", textAlign: "center"}}>
            <div style={{margin: "2rem auto"}}>
                Welcome to the Student Loans App
            </div>
            <Loans/>
        </div>
    )
}

export default Home