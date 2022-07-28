import React from 'react'
import styled from 'styled-components'
import SliderPage from './SliderPage'

function Panel() {
  return (
    <Container>
        <Wrap>
            <Content>
            <Left>
                <Box>
                <h1>OUR VISION</h1>
                <img src='/images/vision.svg' />
                <p>Our vision to be the most recognised premire organisation in washing and dyeing in south asia</p>
                </Box>
            </Left>
            <Right>
                <Box>
                <h1>OUR MISSION</h1>
                <img src='/images/mission.svg' />
                <p>Our vision to be the most recognised premire organisation in washing and dyeing in south asia, the most recognised premire organisation in washing and dyeing in south asia</p>
                </Box>
            </Right>
            </Content>
            <ContentTwo>
                <LeftTwo>
                    <img src='/images/building.svg' />
                </LeftTwo>
                <RightTwo>
                    <h2>We are basically doing three types of production.</h2>

                    <ul>
                        <li>ATG Gloves Washing</li>
                        <li>Fabric Washing</li>
                        <li>Garments Washing</li>
                    </ul>

                    <h2>We are using standard quality systems when do above productions for give the good & success production to our customers.</h2>
                </RightTwo>
            </ContentTwo>
        </Wrap>

    </Container>
  )
}



const Container = styled.div`
    width: 100%;
    min-height: 150vh;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
    background-image: url('/images/home.png');
    background-repeat: no-repeat;

    @media only screen and (max-width: 1200px){
        background-position:center;
    }

`

const Content = styled.div`
    display: flex;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }

`

const Wrap = styled.div`
    width: 95%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;

    @media only screen and (max-width: 1200px){
        padding: 0px 0;
    }
    


`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 1200px){
        width: 100%;
        margin: 20px 0;
    }
  

`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 1200px){
        width: 100%;
        margin: 20px 0;
    }
`
const Box = styled.div`
width: 80%;
text-align: center;
background: #fff;
opacity: 0.8;
border-radius: 15px;
padding: 15px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
border-top: 2px solid #6C63FF;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
img{
    width: 40%;
}

h1{
    font-size: 45px;
    margin-bottom: 20px;

    @media only screen and (max-width: 1200px){
        font-size: 35px;
    }
}

p{
    font-size: 20px;
    padding: 20px 0;

    
    @media only screen and (max-width: 1200px){
        font-size: 17px;
    }
}

`

const ContentTwo = styled.div`
    width: 80%;
    display: flex;
    background: #fff;
    margin: 30px;
opacity: 0.8;
border-radius: 15px;
padding: 15px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
border-top: 2px solid #6C63FF;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  @media only screen and (max-width: 1200px){
    flex-direction: column;
    
}


`

const LeftTwo = styled.div`
    width: 40%;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }

    img{
        width: 80%;

        
    @media only screen and (max-width: 1200px){
        width: 100%;
    }
    }

`

const RightTwo = styled.div`
    width: 60%;

    @media only screen and (max-width: 1200px){
        width: 100%;
        text-align: center;
    }

    li{
        margin: 15px ;
        @media only screen and (max-width: 1200px){
            list-style: none;
        }
    }
   
    h2{
        
    @media only screen and (max-width: 1200px){
        font-size: 20px;
        margin: 20px 0;
    }
    }


`


export default Panel