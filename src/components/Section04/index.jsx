import * as S from './styles'

const Section04 = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2 style={{ marginBottom: '3rem' }}> 
          O que estão dizendo sobre o "Ableton Live Essencial"
        </h2>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BCvBnZ7tDdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <div className='contentItens'>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Section04;