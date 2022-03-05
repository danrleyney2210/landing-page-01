import styled from 'styled-components'
import myImage from '../../assets/bg2.jpg'
import myImage02 from '../../assets/bg.jpg'

export const Wrapper =styled.div`
  width: 100vw; 
  height: 100%;
  background-image: url(${myImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

`
export const Container = styled.div`
  max-width: 1140px;
  min-height: 770px;
  margin: 0 auto;
  display: flex;

  img, svg {
    margin: 0px;
    width: 170px; 
    margin-bottom: 1rem;
  }

  > div {
    margin: auto 0;
    max-width: 450px;

    h4 {
      color: #292B30;
      font-family: "Montserrat",Sans-serif;
      font-size: 28px;
      font-weight: 800;
      line-height: 40px;
      margin-bottom: 1rem; 
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 1rem;
    }
  }

  @media(max-width:1180px) {
    min-height: 570px;
    padding: 0 2rem;
  }

  @media(max-width:715px) {
    > div {
      h4 {
        line-height: 34px;
      }

      p {
        font-size: 16px;
      }
    }
  }

`