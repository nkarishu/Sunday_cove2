import styled from "styled-components";
import mv from '../assets/mv.jpg';

export default function MainVisual() {
    return <MainVisualContainer>
        <MainVisualTitle>sunday cove</MainVisualTitle>
        <MainVisualPic><img src={mv} alt="mv" /></MainVisualPic>
    </MainVisualContainer>
}

export const MainVisualContainer = styled.div`
margin: 8vh 0 40vh;
`

export const MainVisualTitle = styled.h2`
margin: 0 30px 2vh 0;
font-size: 8rem;
font-weight: 100;
letter-spacing: .5rem;
text-align: right;
`

export const MainVisualPic = styled.p`
height: calc(100vh - 10vh - 6rem);
width: 80%;
margin: auto 0 auto auto;
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center 12%;
}
`