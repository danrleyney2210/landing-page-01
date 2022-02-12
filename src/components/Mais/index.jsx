import * as S from './styles'
import { MdPlayLesson } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiStatusOnline } from 'react-icons/hi'
import Button from '../button'

const Mais = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div className='ContentInfo'>
          <div>
            < MdPlayLesson />
            <h3>Mais de 60 aulas</h3>
          </div>
          <div>
            < FaTelegramPlane />
            <h3>Grupo no Telegram</h3>
          </div>
          <div>
            < HiStatusOnline />
            <h3>100% Online</h3>
          </div>
        </div>
        <div style={{marginTop:'2rem' }}>
          <Button children="Sim! Eu quero mais views!" />
        </div>
      </S.Container>

      
    </S.Wrapper>
  )
}

export default Mais;