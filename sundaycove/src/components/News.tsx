import styled from "styled-components";
import svg from '../assets/arrow.svg';
import sec3 from '../assets/sec3.jpg';

export default function News(){
    return <NewsContainer>
        <h2>Latest News</h2>
        <Newswrap>
            <NewsLine />
            <dl>
                <dt>10/20/2022</dt>
                <dd>How to choose the right essential items for your capsule wardrobe</dd>
            </dl>
            <NewsLine />
            <dl>
                <dt>9/18/2022</dt>
                <dd>8 tips to help you build more outfits with the clothes you have</dd>
            </dl>
            <NewsLine />
            <dl>
                <dt>8/28/2022</dt>
                <dd>4 reasons you’re struggling to identify your body shape</dd>
            </dl>
            <NewsLine />
            <dl>
                <dt>7/12/2022</dt>
                <dd>A q&a session with personal stylist</dd>
            </dl>
            <NewsLine />
            <dl>
                <dt>5/30/2022</dt>
                <dd>5 ways to update your closet and style (for free!)</dd>
            </dl>
            <NewsLine />
            <dl>
                <dt>3/21/2022</dt>
                <dd>The best jeans styles for pear shaped women</dd>
            </dl>
            <NewsLine />
            <a href="#">read more<img src={svg} alt="svg" /></a>
        </Newswrap>
        <NewsPic><img src={sec3} alt="sec3" /></NewsPic>
    </NewsContainer>
}

export const NewsContainer = styled.div`
    width: 70%;
    margin: auto 8% 20vh 22%;

    h2 {
        font-size: 3rem;
        font-weight: 200;
        letter-spacing: .1rem;
        text-align: center;
        margin-bottom: 10vh;
    }
`

export const Newswrap = styled.div`
    width: 80%;
    margin: 0 auto;

    dl {
        width: 80%;
        margin: 0 auto;
        display: flex;
        line-height: 2;
        font-weight: 200;
        letter-spacing: .1rem;
        padding-left: 36px;
    }

    a {
        display: inline-block;
        text-decoration: none;
        letter-spacing: .1rem;
        font-weight: 200;
        color: #000;
        padding: 22px 36px;
        border: 1px solid #000;
        margin-top: 8vh;
    }

    img {
    margin-left: 150px;
    }

    `

export const NewsLine = styled.div`
    width: 90%;
    height: 1px;
    margin: 25px auto;
    background: #c2c2c2;
`

export const NewsPic = styled.div`
    width: 80%;
    height: 40vh;
    margin: 20vh auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `