import styled from "styled-components";


export const ContainerStyled = styled.div`
min-height: 575px;
background-color: #f3f3f3;

@media(max-width: 1000px){
  padding: 20px;
}



@media(max-width: 500px){
  padding-bottom: 100px;
}


`;





export const WrapperStyled = styled.div`
min-height: 575px;
max-width: 1140px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;


@media(max-width: 1000px){
  display: block;
}


.div-selo{
  min-height: 575px;
  display: flex;
  
  svg{
    margin: auto;
    display: block;
      
  }

  @media(max-width: 1000px){
    max-height: 400px;
  }

    
  
}



.div-text{
  padding: 10px;
  min-height: 575px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media(max-width: 1000px){
    padding: 10px;
    max-width: 380px;
    max-height: 400px;
    margin: -80px auto 0 auto;
  }


  
  h1{
    font-size: 36px;
    font-weight: 800;


    @media(max-width: 500px){
      font-size: 28px;
    }
  }
  
  h2{
    font-size: 20px;
    font-weight: 700;

    @media(max-width: 500px){
      font-size: 16px;
    }
  }
  
  h1, h2{
    margin-bottom: 20px;
  }
  
  p{
    line-height: 30px;
    font-size: 18px;


    @media(max-width: 500px){
      font-size: 14px;
    }
  }
}

`;