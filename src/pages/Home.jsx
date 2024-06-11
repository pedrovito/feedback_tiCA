import { IconContainer, CardContainer, ButtonContainer, ResultPContainer } from "./Home.styled"
import iconStarImg from "../assets/icon-star.svg"
import illustration from "../assets/illustration-thank-you.svg"
import { useState } from "react"

export function Home() {
  const [mostraResultado, setMostraResultado] = useState(false)
    const[feedbackNote, setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event){
    const feedback = Number(event.target.innerText )

    setFeedbackNote(feedback)
  }
  function handlesubmit (){
    if (feedbackNote === 0) return
    setMostraResultado(true)
  }

  console.log(feedbackNote)
  return (
    mostraResultado === false ?(


      <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt=" icone de estrela" />
      </IconContainer>

      <h1>como foi o atendimento?</h1>
      <p>conete-nos como foi nossa ajuda com a solicitação. Agradecemos muito o seu feedback para podemos melhorar nosso atendimento! </p>

      <ButtonContainer>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <button onClick={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
      </ButtonContainer>
      <button onClick={handlesubmit}>enviar</button>
    </CardContainer>
    ): (
      <CardContainer>
        <img src={illustration} alt="imagem de agradecimento" />
        <ResultPContainer>
          <p>Voce selecionol {feedbackNote}/5</p>
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
