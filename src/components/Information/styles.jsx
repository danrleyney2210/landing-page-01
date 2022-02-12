import styled from 'styled-components'


export const Wrapper =styled.div`
  width: 100vw;
  background: #f0efef; 
`

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;

  h1 {
    margin-bottom: 2rem;
  }

  section {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;

    div {
      text-align: left;
    }
  }

  @media(max-width:1180px) {
    padding: 5rem 2rem;
  }

  @media(max-width: 800px) {
    section {
      grid-auto-flow: row;
    }
  }
  `

export const ItemText = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  svg {
    margin-right: 0.8rem;
    width: 2rem;
    height: 2rem;
    fill: #1d8f8f;
  } 
`