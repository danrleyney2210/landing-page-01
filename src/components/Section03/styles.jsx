import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100vw;
  background: #26c0c0; 
`
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;

  > div {
    display: flex;
    
    justify-content: space-between;
    gap: 2rem;

    .item {
      border-radius: 12px;
      background-color: #fff; 
      height: 350px; 
      width: 100%; 
    }
  }

  @media(max-width:1180px) {
    padding: 4rem 2rem;
  }

  @media(max-width: 780px) {
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .item {
        width: 70%;
      }
    }
  }
  `
