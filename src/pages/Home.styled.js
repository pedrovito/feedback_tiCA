import styled from "styled-components"

export const CardContainer = styled.div`
    background: ${props => props.theme.cardGradiente};
    max-width: 41.2rem;
    padding: 3.2rem;
    border-radius:3rem;
    text-align: center;
    h1{
        font-size: 2.8rem;
        color: ${props =>props.theme.white}
    }
    p{
        font-size: 1.5rem;
        line-height:2.4rem;
        color:${props => props.theme.textColor};
        text-align: center
    }
`

export const IconContainer = styled.div`

`

export const ButtonContainer = styled.div`` 