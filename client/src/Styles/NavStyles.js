import styled from "styled-components"

export const NavImage = styled.img`
    width: 100%;
    height: 2rem;
    margin: .75rem 1rem;
    display: inline;
`
export const NavImageContainer = styled.div`
    width: 15rem;
    margin-left: 5%;
`
export const NavElementsContainer = styled.div`
    display: flex;
    flex-direction: inline;
    width: 65%;
`
export const MenuContainer = styled.div`
    position: sticky;
    background: #282c34;
    width: 120px;
    float: right;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.8);
    margin-top: -3px;
    text-align: left;
`
export const MenuCloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: white;
`
export const FullNavbarContainer = styled.div`
    z-index: 1000;
    width: 100%;
    height: 4rem;
    margin-top: 0;
    position: sticky;
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.8);
    background-color: #282c34; //dark gray background
`
export const FullWholesaleNavbarContainer = styled.div`
    z-index: 500;
    width: 100%;
    height: 3rem;
    margin-top: 0;
    position: sticky;
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.8);
    background-color: #282c34; //dark gray background
`
export const NavButtonContainer = styled.div`
    position: absolute;
    background: transparent;
    width: 95%;
    text-align: right;
    float: right;
    @media (max-width: 950px) {
        display: none;
    }
`
export const NavHamburgerMenu = styled.div`
    display: none;
    @media (max-width: 950px) {
        display: block;
        position: absolute;
        background: transparent;
        width: 95%;
        margin: .75rem auto;
        text-align: right;
        float: right;
    }
`
export const NavHamburgerButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    width: 2rem;
`
export const NavButton = styled.button`
    color: #5fc75d;
    background: transparent;
    border: none;
    padding: 5px 15px;
    margin: auto 5px;
    display: inline-block;
    cursor: pointer;
    font-family: Trebuchet MS, sans-serif;
    transition: all 0.3s ease-in-out;
    &:hover {
        transition: all 0.3s ease-in-out;
        color: white;
    }
`