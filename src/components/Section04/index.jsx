import * as S from './styles'
import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";






const Section04 = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  
  
  
  
  return (
    <S.Wrapper>
      <S.Container>
        <h2 style={{ marginBottom: '3rem' }}> 
          O que estão dizendo sobre o "Ableton Live Essencial"
        </h2>
    
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BCvBnZ7tDdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    
    
        <Slider {...settings} >
          <div>
            <iframe height="100%"  src="https://www.youtube.com/embed/xPonDcOOsZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/CXdeFLOrPbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/1BOdN8lH1og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/dQU1HSm5J80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/OI7I0hl7XmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/9nb371jEFjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/XOMmSQId14k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div >
            <iframe height="100%" src="https://www.youtube.com/embed/MR_ItuovBqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
        </Slider>
    
      </S.Container>
    </S.Wrapper>
    )
  }
  
  export default Section04;