import { IconContainer, CardContainer, ButtonContainer } from "./Home.styled"
import iconStarImg from "../assets/icon-star.svg"
export function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt=" icone de estrela" />
      </IconContainer>

      <h1>como foi o atendimento?</h1>
      <p>conete-nos como foi nossa ajuda com a solicitação. Agradecemos muito o seu feedback para podemos melhorar nosso atendimento! </p>

      <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContainer>
      <button>enviar</button>
    </CardContainer>


  )
}
