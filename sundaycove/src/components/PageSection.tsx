import styled from "styled-components"

export const PageSectionWrapper = styled.section``

export interface IPageSection {
    children?: React.ReactNode[]
}

export default function PageSection (props: IPageSection){
    return <PageSectionWrapper>{props.children}</PageSectionWrapper>
}