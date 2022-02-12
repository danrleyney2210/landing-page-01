import styled from "styled-components";
import { darken } from "polished";




export const ContainerStyled = styled.div`
background-color: #00ffff;
padding: 60px 0;


`;






export const WrapperStyled = styled.div`
padding: 20px;
max-width: 1040px;
margin: 0 auto;

h1, h3{
  padding-bottom: 12px;
}



@media(min-width: 320px){
  text-align: center;
  
  h1{
    font-size: 26px;
    font-weight: 800;
  }
  
  h3{
    font-size: 16px;
    font-weight: 700;
  }
  
  p{
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  
}



@media(min-width: 481px){
  
  h1{
    font-size: 28px;
  }
  
  h3{
    font-size: 18px;
    font-weight: 700;
  }
  
  p{
    font-size: 16px;
  }
  
}



@media(min-width: 769px){
  
  h1{
    font-size: 36px;
  }
  
  h3{
    font-size: 22px;
  }
  
  p{
    font-size: 16px;
  }
  
}



`;





export const ButtonStyled = styled.button`

background-color: #289e17;
color: white;
text-transform: uppercase;
border: none;
border-radius: 5px;
padding: 20px;
font-size: 14px;
font-weight: 600;
transition: all .2s;

:hover{
  background-color: ${darken(.05,"#289e17")};
}
`;