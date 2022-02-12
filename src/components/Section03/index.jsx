import * as S from './styles'
import Button from '../button/index';

const Section03 = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2 style={{ marginBottom: '3rem' }}>Tenho mais 3 presentes para você</h2>
        
        <div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>

        <Button children="Eu quero Participar" style={{ marginTop: '3rem', backgroundColor: 'black', color: '#fff'}}/>
      </S.Container>
    </S.Wrapper>
  )
}

export default Section03;