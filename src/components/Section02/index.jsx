import * as S from './styles'

const Default = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>O que você vai encontrar no <br /> Método Mais Views:</h1>
        <h3>60 aulas + Bônus + Aulas extras</h3>
        <div className="item">
          <div>
            <h1>01</h1>
            <p>Mente de <br /> Crescimento</p>
          </div>
          <div>
            <h1>02</h1>
            <p>Curso de <br /> Google Ads</p>
          </div>
          <div>
            <h1>03</h1>
            <p>Curso de <br /> Facebook Ads</p>
          </div>
        </div>

        <div className="item">
          <div>
            <h1>04</h1>
            <p>Curso de <br /> Spotify</p>
          </div>
          <div>
            <h1>05</h1>
            <p>Direitos <br /> Autorais</p>
          </div>
          <div>
            <h1>06</h1>
            <p>BÔNUS #1 - Curso tire sua música do papel</p>
          </div>
        </div>

        <div className="item">
          <div>
            <h1>07</h1>
            <p>
              BÔNUS #2 - Aulas extras sobre o mercado musical</p>
          </div>
          <div>
            <h1>08</h1>
            <p>BÔNUS #2 - Aulas extras sobre o mercado musical</p>
          </div>
          <div>
            <h1>09</h1>
            <p>BÔNUS #3 - Lives com profissionais e artistas do mercado da música</p>
          </div>
        </div>

      </S.Container>
    </S.Wrapper>
  )
}

export default Default;