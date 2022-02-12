import Button from "../button"
// import Logo from '../../assets/logo.png'
import * as S from "./styles"

const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          {/* <img src={Logo} alt="" /> */}
          <h4>
            Descubra como alcançar a monetização do seu canal no Youtube.
          </h4>
          <p>
            Descubra os segredos utilizados por  grandes 
            gravadoras e agências de marketing, para aumentar suas visualizações.
            Um <strong>método</strong> que vai te ajudar a impulsionar o seu conteúdo e sua música da 
            maneira certa. 
          </p>
          <Button children="Sim! Eu quero mais views!"/>
        </div>
      </S.Container>
      
    </S.Wrapper>
  )
}

export default Home;