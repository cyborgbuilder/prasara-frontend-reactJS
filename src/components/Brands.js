import React from 'react'
import styled from 'styled-components'

function Brands() {
  return (
    <Container>
        <Header>
            <h1>Customers and Brands</h1>
        </Header>
        <Wrap>
            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://i.pinimg.com/originals/d4/52/f0/d452f0040e24b65d7efdeebd39109996.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                <Text>
                    <h1>Levis</h1>
                </Text>
            </Box>

            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://cdn.corporate.walmart.com/dims4/WMT/0b04aa6/2147483647/strip/true/crop/2400x1260+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F6f%2Fd3%2Ff3f5a16f44a88d88b8059defd0a9%2Foption-signage.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                <Text>
                    <h1>Walmart</h1>
                </Text>
            </Box>

            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://upload.wikimedia.org/wikipedia/commons/1/11/Next-black-2022.jpg')", backgroundRepeat: "no-repeat" , backgroundSize: "cover", backgroundPosition: "center"}}>
                <Text>
                    <h1>Next</h1>
                </Text>
            </Box>

            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://roydtoolgroup.com/wp-content/uploads/2021/07/Sedex-Logo.png')",  backgroundSize: "cover", backgroundPosition: "center"}}>
                <Text>
                    <h1>Sedex</h1>
                </Text>
            </Box>

            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://marketingweek.imgix.net/content/uploads/2020/11/04072238/MS.jpg?auto=compress,format&q=60&w=736&h=429')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <Text>
                    <h1>M & S</h1>
                </Text>
            </Box>

            <Box style={{background: "linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://www.australianmining.com.au/wp-content/uploads/2021/02/Screen-Shot-2021-02-22-at-11.12.30-am.png')",  backgroundSize: "cover", backgroundPosition: "center"}}>
                <Text>
                    <h1>ATG</h1>
                </Text>
            </Box>
        </Wrap>

        <ImageBox style={{background: "url('/images/brand1.svg')", top: "10%", left: "0"}}></ImageBox>

        <ImageBox style={{background: "url('/images/brand2.svg')", top: "50%", right: "0"}}></ImageBox>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative

`

const Wrap = styled.div`
    width: 95%;
    padding: 20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


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
const Box = styled.div`
    width: 90%;
    height: 160px;
    border-radius: 20px;
    z-index: -1;
    // background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://i.pinimg.com/originals/d4/52/f0/d452f0040e24b65d7efdeebd39109996.png');
    background-size: contain;
    position: relative;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
    margin: 20px 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    opacity: 0.9;

    @media only screen and (max-width: 1200px){
     width: 100%; 
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
  



`

const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;

    h1{
        color: #fff;
        font-size: 46px;

        @media only screen and (max-width: 1200px){
            font-size: 30px;
        }
    }



`

const ImageBox = styled.div`
    width: 800px;
    height: 600px;
    z-index: 0;
    position: absolute;

`
export default Brands