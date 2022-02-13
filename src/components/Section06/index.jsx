import React from 'react'
import { ContainerStyled, WrapperStyled } from './styles'
import {ReactComponent as Selo} from "../../assets/selo.svg"

export const Section06 = () => {
  return (
    <ContainerStyled>
      <WrapperStyled >
        <div className='div-selo'>
          <Selo />
        </div>
        <div className='div-text'>
          <h1>FIQUE TRANQUILO!</h1>
          <h2>
            O Método Mais Views tem
            garantia incondicional de 15 dias.
          </h2>
          <p>
            Você pode assistir todas as aulas e ter acesso aos bônus exclusivos. Se por qualquer motivo você não ficar satisfeito com o método, basta entrar em contato com a minha equipe de suporte (metofomaisviews@gmail.com) e solicitar o reembolso do valor investido. Você receberá de volta cada centavo que pagou.
          </p>
        </div>
      </WrapperStyled>
    </ContainerStyled>
    )
  }
