import React from "react";
import Slider from "react-slick";
import { ContainerStyled, WrapperSlidesStyled, WrapperMainVideo } from "./styles"


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";






const Section04 = () => {



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <ContainerStyled>
    
      <WrapperMainVideo>
        <h2 style={{ marginBottom: '3rem' }}> 
          O que estão dizendo sobre o "Ableton Live Essencial"
        </h2>
    
        <iframe width="80%" height="315" src="https://www.youtube.com/embed/BCvBnZ7tDdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </WrapperMainVideo>
    
      <WrapperSlidesStyled>
        <Slider {...settings} >
          <div className="item">
            <iframe width="90%" height="100%"  src="https://www.youtube.com/embed/xPonDcOOsZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/CXdeFLOrPbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/1BOdN8lH1og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/dQU1HSm5J80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/OI7I0hl7XmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/9nb371jEFjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/XOMmSQId14k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="item">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/MR_ItuovBqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
        </Slider>
      </WrapperSlidesStyled>
    
    </ContainerStyled>
    
    )
  }
  
  export default Section04;