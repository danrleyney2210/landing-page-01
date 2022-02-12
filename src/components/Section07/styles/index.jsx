import styled from "styled-components";
import bgcBig from '../../../assets/bgc-invert.jpg'
import bgcSmall from '../../../assets/bgc-invert-small.jpg'


export const ContainerStyled = styled.div`
  background-repeat: no-repeat;
  min-height: 900px;
  background-color: red;
  padding: 20px;

@media(min-width: 320px){
  background-size: cover;
  background-position: center top;
  background-image: url("${bgcSmall}");
  display: flex;
  justify-content: center;
  flex-direction: column; 
}


@media(min-width: 769px){
  justify-content: end;
}

@media(min-width: 1025px){
  background-image: url("${bgcBig}");
  justify-content: center;
}


`;



export const WrapperStyled = styled.div`
color: white;
max-width: 1140px;
margin: 0 auto;

@media(min-width: 1025px){
  display: grid;
  grid-template-columns: 1fr 2fr;
}



.div-text{
  
  h1{
    font-size: 38px;
    height: 38px;
    
    
    
    @media(min-width: 320px){
      font-size: 24px;
      text-align: center;
      margin-top: 10px;
    }
    
    @media(min-width: 481px){
      font-size: 32px;
    }
    
    @media(min-width: 1025px){
      font-size: 36px;
      text-align: left;
      margin-bottom: 20px;
    }
    
  }
  
  p{
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
    
    
    @media(min-width: 320px){
      font-size: 14px;
    }
    
    @media(min-width: 481px){
      font-size: 16px;
    }

    @media(min-width: 1025px){
      font-size: 18px;
      line-height:24px;
    }

    
    
  }
}


`;