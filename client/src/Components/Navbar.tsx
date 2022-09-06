import { HiMenu } from "react-icons/hi"
import { useState, FC } from "react"
import {
    FullNavbarContainer,
    MenuCloseButton,
    MenuContainer,
    NavButtonContainer,
    NavElementsContainer,
    NavHamburgerButton,
    NavHamburgerMenu,
    NavImageContainer
} from "../Styles/NavStyles"

const Navbar: FC = (): JSX.Element => {
    //state
    const [menu, setMenu] = useState<boolean>(false)

    //functions
    const openMenu = (): void => {
        setMenu(true)
    }
    const closeMenu = (): void => {
        setMenu(false)
    }

    return (
        <FullNavbarContainer>
            <NavElementsContainer>
                <NavImageContainer>
                    <h2>Student Loans App</h2>
                </NavImageContainer>
                <NavButtonContainer>
                    <div>Loans</div>
                </NavButtonContainer>
                <NavHamburgerMenu>
                    <NavHamburgerButton onClick={openMenu}>
                        <HiMenu size="30" />
                    </NavHamburgerButton>
                </NavHamburgerMenu>
            </NavElementsContainer>
            {menu && (
                <MenuContainer>
                    <MenuCloseButton onClick={closeMenu}>
                        &#10006;
                    </MenuCloseButton>
                    <div>Loans</div>
                </MenuContainer>
            )}
        </FullNavbarContainer>
    )
}

export default Navbar
