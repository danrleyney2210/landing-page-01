import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
`

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  
  .ContentInfo {
    display: flex;
    justify-content: center; 
    gap: 2rem;
    flex-wrap: wrap;

    div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 100%;
      margin-top: 1rem;
    }

    svg {
      width: 250px;
      height: 70px;
      fill: #26c0c0;
    }
  }
  }
  

  button {
    margin-top: 2.5rem;
  }
`