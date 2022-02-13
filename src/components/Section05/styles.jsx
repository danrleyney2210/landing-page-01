import styled from 'styled-components'
import { darken } from 'polished'


export const Wrapper = styled.div`
width: 100vw;
background-color: #fff;
padding: 80px 30px;

@media(max-width: 1000px){
  height: auto;
}
`;



export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 1140px;
margin: 0 auto;


.preco {
  padding: 60px;
  max-width: 564px;
  border: 3px solid black;
  border-radius: 10px;
  color:#2a2b31;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
  
  @media(max-width:500px){
    padding: 30px;
    
  }
  
  h5{
    font-weight: 700;
    font-size: 22px;
    text-align: center;
  }
  
  h5:nth-child(3){
    margin-top: -15px;
  }
  
  
  .preco-errado span{
    color: #f31616;
    text-decoration: line-through;
  }
  
  img{
    display: block;
    margin: -20px auto 0 auto;
    width: 100%;
  }
  
  button{
    background-color:RGB(67, 255, 255);
    max-width: 410px;
    padding: 20px;
    border-radius: 5px;
    border: none;
    margin: 20px auto 0 auto;
    display: block;
    font-size: 18px;
    font-weight: 800;
    transition: all .2s;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
    
    :hover{
      background-color: ${darken(.17 , "#43ffff")}
    }
    

    @media(max-width:500px){
      font-size: 1rem;
    }
  }
  
}



.bonus{
  padding: 16px;
  color: #292b30;
  max-width: 564px;
  
  
  h1{
    font-size: 36px;
    font-weight: 800;
    line-height: 44px;
    height: 118px;
    
    
    @media(max-width: 500px){
      font-size: 24px;
      text-align: center;
    }
  }
  
  
  .wrapper-bonus-op{
    height: 47px;
    line-height: 27px;
    margin-bottom: 10px;
    
    
    
    
    p{
      font-size: 18px;
      font-weight: 400;
      
      span{
        font-size: 14px;
        display: block;
        font-weight: 600;
        margin-left: 38px;
        margin-top: -6px;
      }
      
      img{
        margin-right: 15px;
        margin-bottom: -7px;
      }
      
      @media(max-width: 500px){
        font-size: 14px;
      }
    }
  }
  

} 



@media(max-width: 1000px){
  display: block;
  
  .bonus{
    margin: 0 auto 30px;
  }
  
  .preco {
    margin: auto;
  }
  
  
}

`;