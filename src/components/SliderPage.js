import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'


function SliderPage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        accessibility: true,
        arrows: false
      };
  return (
    <Container>
        <Header>
            <h1>Management Panel</h1>
        </Header>
         <Wrap>
         <Slider {...settings}>
                    <SliderWrap>
                        <Image>
                            <img src='/images/slider1.svg' />
                        </Image>
                        <Text>
                            <h1>Dammika Hapuarachchi</h1>
                            <p>Managing Director</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider2.svg' />
                        </Image>
                        <Text>
                            <h1>B.M.M. Thilakaratne</h1>
                            <p>Factory Manager</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider3.svg' />
                        </Image>
                        <Text>
                            <h1>M.A. Nalinda Prabath</h1>
                            <p>Marketing and Development Manager</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider5.svg' />
                        </Image>
                        <Text>
                            <h1>D.B. Sameera Sudarshana</h1>
                            <p>Production Manager</p>
                        </Text>
                    </SliderWrap>
                   

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider4.svg' />
                        </Image>
                        <Text>
                            <h1>I.E. Janaka Chandana</h1>
                            <p>Quality Assurance Manager</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider6.svg' />
                        </Image>
                        <Text>
                            <h1>M.K. Nimasha Udayangani</h1>
                            <p>Human Resource Manager</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider7.svg' />
                        </Image>
                        <Text>
                            <h1>L.M. Achala Amarasinghe</h1>
                            <p>Environmental Manager</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider8.svg' />
                        </Image>
                        <Text>
                            <h1>Ruchira Lalana</h1>
                            <p>Data Entry Incharge</p>
                        </Text>
                    </SliderWrap>

                    <SliderWrap>
                        <Image>
                            <img src='/images/slider9.svg' />
                        </Image>
                        <Text>
                            <h1>Madushi Sarangi</h1>
                            <p>Production Officer</p>
                        </Text>
                    </SliderWrap>
                </Slider>
         </Wrap>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    background-size: contain;
    background-repeat: no-repeat;
    

    
    @media only screen and (max-width: 1200px){
        height: 70vh;
    }

`

const Header = styled.div`
    text-align: center;
    padding: 40px 0;

    
    @media only screen and (max-width: 1200px){
        padding-bottom: 20px;
    }


    h1{
        font-size: 80px;
        

        
    @media only screen and (max-width: 1200px){
        font-size: 42px;
    }
    }

`

const Wrap = styled.div`
    width: 90%;
    height: 75vh;
    background: #6C63FF;
    border-radius: 15px;
    margin-top: 30px ;
    border-top: 2px solid #6C63FF;

    @media only screen and (max-width: 1200px){
        height: 60vh;
    }

`

const SliderWrap = styled.div`
    display: flex;
    height: 74vh;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: #fff;
    border-radius: 15px;
    opacity: 0.9;

    @media only screen and (max-width: 1200px){
        height: 59vh;
    }

`
const Image = styled.div`
display: flex;
height: 400px;
justify-content: center;
align-items: center;


@media only screen and (max-width: 1200px){
    height: 250px;
}

    img{
        width: 45%;
        padding: 10px 0;
        height: 100%;
    }

`


const Text = styled.div`
    margin: 20px 0;
    
    h1{
        font-size: 46px;


        
    @media only screen and (max-width: 1200px){
        font-size: 30px;
    }
    }

`

export default SliderPage