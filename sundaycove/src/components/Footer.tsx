import styled from "styled-components";
import footer1 from '../assets/footer_1.jpg';
import footer2 from '../assets/footer_2.jpg';

export default function Footer(){
    return <FooterContainer>
        <FooterWrap>
            <FooterPic1><img src={footer1} alt="footer1" /></FooterPic1>
            <FooterPic2><img src={footer2} alt="footer2" /></FooterPic2>
        </FooterWrap>
        <FooterCopy>Copyright &copy; 2021 sunday cove All Right Reserved.</FooterCopy>
    </FooterContainer>
}

export const FooterContainer = styled.div`
    ::after {
        content: "";
        display: block;
        height: 50vh;
        width: 100%;
        background: #CBD9DC;
        margin-top: -45vh;
    }
`

export const FooterWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5vh;
`

export const FooterPic1 = styled.div`
    height: 70vh;
    width: 40%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const FooterPic2 = styled.div`
    height: 70vh;
    width: 40%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`

export const FooterCopy = styled.div`
    text-align: right;
    font-weight: 200;
    margin-right: 2%;
`