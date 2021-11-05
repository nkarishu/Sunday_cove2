import styled from "styled-components";
import sec1_1 from '../assets/sec1_1.jpg';
import sec1_2 from '../assets/sec1_2.jpg';
import svg from '../assets/arrow.svg';

export default function Concept() {
    return <ConceptContainer>
        <ConceptBox1>
            <ConceptTextBox1>
                <h3>Style inspired by you.</h3>
                <p>Receive five pieces handpicked for you by your Personal Shopper.</p>
            </ConceptTextBox1>
            <ConceptPic1><img src={sec1_1} alt="sec1_1" /></ConceptPic1>
        </ConceptBox1>
        <ConceptBox2>
            <ConceptPic2><img src={sec1_2} alt="sec1_2" /></ConceptPic2>
            <ConceptTextBox2>
                <p>The more we know you, the better your Personal Shopper can style you. Take our short style survey so we can learn how you like to look.</p>
                <p>Relax into your style. Try on your five new pieces in the comfort of your own home. Keep or return in five days. Enjoy.</p>
                <p>Pay for what you love, return the rest. No obligation. Love all five? Perfect, take 25% off your entire order. You deserve it.</p>
                <p>Our Personal Shoppers search over 150 European brands, in sizes 6 to 20, creating looks that are uniquely you.</p>
                <a href="#">read more<img src={svg} alt="svg" /></a>
            </ConceptTextBox2>
        </ConceptBox2>
    </ConceptContainer>
}

export const ConceptContainer = styled.div`
position: relative;
margin-bottom: 40vh;

::before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: #CBD9DB;
    width: 80%;
    height: 120vh;
}
`

export const ConceptBox1 = styled.div`
display: flex;
justify-content: space-between;
width: 64%;
margin: 0 10% 0 26%;
`

export const ConceptTextBox1 = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-end;
flex-direction: column;
width: 35%;

h3 {
    font-size: 2.5rem;
    font-weight: 200;
    letter-spacing: .1rem;
}

p {
    font-size: 1.2rem;
    line-height: 2;
    font-weight: 200;
    letter-spacing: .1rem;
    text-align: left;
    margin-bottom: 5vh;
}
`

export const ConceptPic1 = styled.div`
height: 48vh;
width: 58%;
margin-top: -10vh;

img {
height: 100%;
width: 100%;
object-fit: cover;
}
`

export const ConceptBox2 = styled.div`
display: flex;
justify-content: space-between;
width: 60%;
margin: 10vh 7% 0 33%;
`

export const ConceptPic2 = styled.div`
height: 62vh;
width: 38%;

img {
height: 100%;
width: 100%;
object-fit: cover; 
}
`

export const ConceptTextBox2 = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 53%;

p{
    width: 85%;
    font-size: 1rem;
    line-height: 2;
    font-weight: 200;
    letter-spacing: .1rem;
    text-align: left;
}

a {
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: .1rem;
    font-weight: 200;
    color: #000;
    padding: 16px 24px;
    border: 1px solid #000;
    margin-top: 2vh;
}

img {
    margin-left: 150px;
}

`