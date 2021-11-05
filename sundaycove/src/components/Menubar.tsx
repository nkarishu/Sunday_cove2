import styled from "styled-components";
import svg from '../assets/arrow.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Menubar() {
    return <MenubarContainer>
        <MenuBarLogo>sunday cove</MenuBarLogo>
        <MenuItems>
            <a href="#">Concept</a>
            <a href="#">Product</a>
            <a href="#">News</a>
            <a href="#">Shop Info</a>
            <MenuBarLine></MenuBarLine>
            <MenuBarArrow>
                <a href="#">Online Shop</a>
                <img src={svg} alt="svg" />
            </MenuBarArrow>
            <MenuBarSocial>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
            </MenuBarSocial>
        </MenuItems>
    </MenubarContainer>
}

export const MenubarContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
`

export const MenuBarLogo = styled.h1`
position: relative;
top: 3vh;
left: 75px;
font-size: 2rem;
font-weight: 100;
letter-spacing: .3rem;
text-align: left;
`

export const MenuItems = styled.div`
position: relative;
top: 48vh;
left: 75px;
height: 38vh;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;
a {
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 100;
    letter-spacing: .1rem;
    transition: .4s;
    &:hover {
        opacity: 0.2;
    }
}
`

export const MenuBarLine = styled.p`
width: 60%;
height: 1px;
background: #8d8d8d;
`

export const MenuBarArrow = styled.div`
display: flex;
align-items: end;

img {
margin-left: 10px;
}
`

export const MenuBarSocial = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
`