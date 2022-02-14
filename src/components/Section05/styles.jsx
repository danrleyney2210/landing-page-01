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
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media(max-width:500px){
    padding: 30px;
    
  }
  
  
  
  .valor-container{
    text-align: center;
    
    p{
      display: inline-block;
    }
    
    p:nth-child(1){
      
      @media(max-width: 1140px){
        font-size: 2rem;
        
      }
      
      @media(max-width: 440px){
        font-size: 1.5rem;
        
      }
      
      font-size: 2.5rem;
      font-weight: 600;
      
      span{
        display: block;
        text-align: right;
        font-size: 4rem;
        
        @media(max-width: 1140px){
          font-size: 3rem;
          
        }
        
        @media(max-width: 440px){
          font-size: 2.5rem;
          
        }
        
      }
    }
    
    
    p:nth-child(2){
      font-size: 9rem;
      font-weight: 800;
      margin-left: 20px;
      
      
      @media(max-width: 1140px){
        font-size: 8rem;
        
      }
      
      @media(max-width: 440px){
        font-size: 6rem;

      }
      
      span{
        font-size: 3.5rem;
        font-weight: 600;
        display: inline-block;
        vertical-align: top;
        margin-top: 25px;
        
        @media(max-width: 1140px){
          font-size: 3rem;
          
        }

        @media(max-width: 440px){
        font-size: 2rem;

      }
      }
      
    }
    
  }
  
  
  
  
  
  
  h5{
    font-weight: 700;
    font-size: 22px;
    text-align: center;
  }
  
  
  
  .preco-errado span{
    color: #f31616;
    text-decoration: line-through;
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