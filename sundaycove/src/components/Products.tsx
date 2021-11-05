import styled from "styled-components";
import clothes from '../assets/clothes.jpg';
import bags from '../assets/bags.jpg';
import jewellery from '../assets/jewellery.jpg';
import goods from '../assets/goods.jpg';
import skateboards from '../assets/skateboards.jpg';
import food from '../assets/food.jpg';
import sec2 from '../assets/sec2.jpg';

export default function Products() {
    return <ProductsContainer>
        <h2>Products</h2>
        <ProductsBox>
            <ProductsUnit>
                <ProductsPic><img src={clothes} alt="clothes" /></ProductsPic>
                <h3>clothes</h3>
                <p>We can't get started without these! Check out the latest look.</p>
            </ProductsUnit>
            <ProductsUnit>
                <ProductsPic><img src={bags} alt="bags" /></ProductsPic>
                <h3>bags</h3>
                <p>Add a little spice to the look! Our wide range of bag selection.</p>
            </ProductsUnit>
            <ProductsUnit>
                <ProductsPic><img src={jewellery} alt="jewellery" /></ProductsPic>
                <h3>jewellery</h3>
                <p>Necklaces, rings, and bracelets...the spark of joy. </p>
            </ProductsUnit>
            <ProductsUnit>
                <ProductsPic><img src={goods} alt="goods" /></ProductsPic>
                <h3>goods</h3>
                <p>Want something extra? Have a look of our variety goods page!</p>
            </ProductsUnit>
            <ProductsUnit>
                <ProductsPic><img src={skateboards} alt="skateboards" /></ProductsPic>
                <h3>skateboards</h3>
                <p>New 2025 skateboards coming in. Shipping worldwide!</p>
            </ProductsUnit>
            <ProductsUnit>
                <ProductsPic><img src={food} alt="food" /></ProductsPic>
                <h3>food</h3>
                <p>Craving something from overseas? We have all food you can dream of.</p>
            </ProductsUnit>
        </ProductsBox>
        <ProductsAfter><img src={sec2} alt="sec2" /></ProductsAfter>
    </ProductsContainer>
}

export const ProductsContainer = styled.div`
    
    h2 {
        width: 70%;
        margin: auto 8% auto 22%;
        font-size: 3rem;
        font-weight: 200;
        letter-spacing: .1rem;
        text-align: center;
        margin-bottom: 10vh;
    }
    `

export const ProductsBox = styled.div`
    width: 70%;
    margin: auto 8% 20vh 22%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ProductsUnit = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
    margin-bottom: 5vh;

    h3 {
        font-weight: 300;
        margin-bottom: -2vh;
        font-size: 1.4rem;
        line-height: 2;
        letter-spacing: .1rem;
    }

    p {
        font-size: 1rem;
        line-height: 2;
        font-weight: 200;
        letter-spacing: .1rem;
        width: 360px;
    }
`

export const ProductsPic = styled.div`
    width: 300px;
    height: 300px;
    
    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ProductsAfter = styled.div`
    height: 45vh;
    width: 80%;
    margin: 0vh 0 20vh auto;
    
    img {
        width: 100%;
        height: 100%;
        object-position: center bottom;
        object-fit: cover;
    }
`