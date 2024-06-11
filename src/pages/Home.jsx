import { IconContainer, CardContainer, ButtonContainer, ResultPContainer } from "./Home.styled"
import iconStarImg from "../assets/icon-star.svg"
import illustration from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerCard = true
  return (
    aparecerCard === false ?(


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
    ): (
      <CardContainer>
        <img src={illustration} alt="imagem de agradecimento" />
        <ResultPContainer>
          <p>Voce selecionol 4/5</p>
        </ResultPContainer>
        <h1>
          Obrigado!
        </h1>
        <p>
          agradecemos por dedicar o momento para nos avaliar. Se precisar de mais Suporte, Não hesite  em entrar em contato
        </p>
      </CardContainer>
    )
    


  )
}
