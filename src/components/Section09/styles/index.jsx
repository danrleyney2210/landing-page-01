import styled from "styled-components";
import { darken } from "polished";

export const ContainerStyled = styled.div`
  min-height: 380px;
  display: flex;
  align-items: center;
`;

export const WrapperStyled = styled.div`
max-width: 1040px;
margin: 0 auto;
padding: 20px;
text-align: center;

a {
  text-decoration: none;
}

h1{
  font-weight: 800;
}

p{
  font-weight: 700;
  font-size: 18px;
}

h1, h1 + p, button{
  margin-bottom: 20px;
}

`;


export const ButtonStyled = styled.button`
background-color: #289e17;
color: white;
border-radius: 5px;
padding: 20px 30px;
border: none;
font-size: 1rem;
display: block;
margin: 0 auto;
font-weight: 800;
transition: all .2s;

:hover{
background-color: ${darken(.06, "#289e17")};
}
`;