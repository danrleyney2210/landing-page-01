import * as S from './styles'
import precoBig from "../../assets/preco-big.svg"
import checkedFake from "../../assets/checkbox-fake.svg"

const Section05 = () => {
  return (
    <S.Wrapper>
      <S.Container>
    
        <div className='bonus'>
          <h1>
            Você vai receber<br />
            todo esse conteúdo:
          </h1>
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              + de 60 aulas sobre como Impulsionar seus vídeos e sua música
            </p>
          </div>
    
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              <strong>Bônus:</strong> Curso de Google Ads
              De: R$ 997,00 por R$0,00
    
            </p>
          </div>
    
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              <strong>Bônus:</strong> Acesso a Comunidade Mais Views
              De: R$ 297,00 por R$0,00
            </p>
          </div>
    
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              <strong>Bônus:</strong> Mentoria individual para os 10 primeiros alunos
            </p>
          </div>
    
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              <strong>Bônus:</strong> Curso Tire sua música do papel
              De: R$ 297,00 por R$0,00
            </p>
          </div>
    
          <div className='wrapper-bonus-op'>
            <p>
              <img src={checkedFake} alt="checkbox" />
              <strong>Bônus:</strong> Lives com profissionais do mercado musical
              De: R$ 297,00 por R$0,00
            </p>
          </div>
        </div>
    
        <div className='preco'>
          <h5 className='preco-errado'>De <span>R$997,00</span> por APENAS:</h5>
    
          <div className='valor-container'>
            <p>12x de<span>R$</span></p>
            <p>28<span>,94</span></p>
          </div>
    
          <h5>Ou à vista por R$ 497,00</h5>
          <button>Sim! Eu quero mais views</button>
        </div>
    
      </S.Container>
    </S.Wrapper>
    )
  }
  
  export default Section05;