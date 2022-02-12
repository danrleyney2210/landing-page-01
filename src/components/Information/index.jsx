import * as S from "./styles"
import { IoMdCheckboxOutline } from 'react-icons/io'

const Information = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Não desista por não saber como:</h1>

        <section>
          <div>
            <S.ItemText>
              <IoMdCheckboxOutline />
              <p>
                <strong>Como</strong> estruturar o seu canal no YouTube para obter mais fãs, inscritos, engajamento, alcance e visualizações.
              </p>
            </S.ItemText>
            <S.ItemText>
              <IoMdCheckboxOutline />
              <p>
                <strong>Como</strong> impulsionar e aumentar o número de visualizações dos seus vídeos utilizando o Google Ads.
              </p>
            </S.ItemText>
            <S.ItemText>
              <IoMdCheckboxOutline /> 
              <p>
                <strong>Como</strong> enviar sua música e distribuir nas principais plataformas digitais (Spotify, Deezer).
              </p>
            </S.ItemText>
                  
          </div>
          
          <div>
            <S.ItemText>
              <IoMdCheckboxOutline />
              <p>
                <strong>Como</strong> registrar suas letras e melodiais
              </p>
            </S.ItemText>
            <S.ItemText>
              <IoMdCheckboxOutline />
              <p>
                <strong>Como</strong> receber os direitos autorais das suas músicas através do ECAD e associações
              </p>
            </S.ItemText>
            <S.ItemText>
              <IoMdCheckboxOutline />
              <p>
                <strong>Como</strong> enviar sua música e ser adicionado em Playlists editoriais do Spotify
              </p>
            </S.ItemText> 
                  
          </div>
         
        </section>
      </S.Container>
    </S.Wrapper>
  )
}

export default Information