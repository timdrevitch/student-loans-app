import { FC, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { AppContext } from "./Shared/AppContext"

const App: FC = (): JSX.Element => {
    const [url, setUrl] = useState<string>("http://localhost:4000/api") // https://studentloansapp.herokuapp.com || http://localhost:4000
    const [ifCreationFormIsOpen, setIfCreationFormIsOpen] =
        useState<boolean>(false)

    return (
        <>
            <Navbar />
            <Router>
                <AppContext.Provider
                    value={{
                        url,
                        setUrl,
                        ifCreationFormIsOpen,
                        setIfCreationFormIsOpen
                    }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AppContext.Provider>
            </Router>
        </>
    )
}

export default App
