import styled from "styled-components";

export default function Info() {
    return <InfoContainer>
        <InfoBox>
            <h2>sunday cove</h2>
            <p>〒060-0005</p>
            <p>Hokkaidō sapporoshichūōku Chūō-ku Kitagojōnishi 6-chōme 1-ban dai 2 hokkaidō tsūshin biru 5-kai 503-gō</p>
        </InfoBox>
        <InfoMap><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.785534806594!2d141.3445763154789!3d43.06697797914572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b299ff7809a8b%3A0xc56ed83d88dc4a09!2zV1NTIHwgV2ViU3R1ZHlTYXBwb3JvKOOCpuOCp-ODluOCueOCv-ODh-OCo-OCteODg-ODneODrSkgd2Vi44OH44K244Kk44Oz44Gu6IG35qWt6KiT57e05qCh!5e0!3m2!1sja!2sjp!4v1634611714575!5m2!1sja!2sjp"></iframe></InfoMap>
    </InfoContainer>
}

export const InfoContainer = styled.div`
    width: 70%;
    margin: auto 8% 20vh 22%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

export const InfoBox = styled.div`
width: 47%;
text-align: left;

h2 {
    font-size: 12rem;
    font-weight: 100;
    line-height: 0.7;
    margin: 0 0 5vh;
}

p {
    font-weight: 200;
    width: 90%;
    margin-left: 2%;
    font-size: 1.2rem;
    line-height: 2;
    letter-spacing: .1rem;
}
`

export const InfoMap = styled.div`
width: 49%;
height: 40vh;

iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: none;
    }
`