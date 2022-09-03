import { FC, useState } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import { Context } from "./Context"
import Home from "./Pages/Home"

const App:FC = () => {

    const [url, setUrl] = useState<string>("http://localhost:4000/api") // https://studentloansapp.herokuapp.com || http://localhost:4000

    return (
        <>
        <Navbar/>
        <Router>
            <Context.Provider value={{
                url,
                setUrl
            }}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Context.Provider>
        </Router>
        </>
    )
}

export default App
