import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'



function Home() {

  


  return (
    <Container>
        <Wrap>
           
            <AnimeContainer>
              <img src='/images/welcome.svg' />
            </AnimeContainer>

            
       
            <Text>
             <h1>PRASARA WASHING</h1>
             <p>Team Work Make Dream Work!</p>
             
            </Text>
          
            
        </Wrap>

        {/* <Logo>
              <img src='/images/logo.png' />
            </Logo> */}

            

 
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eae9e9;
   background: url('/Images/home3.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media only screen and (max-width: 1200px){

    }

`
const Wrap = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1200px){
    width: 85%;
  }

  img{
    width: 95%;
  }
`

const Text = styled.div`
  width: 90%;
  padding: 50px 0;


  h1{
    font-size: 150px;
    text-align: center;
    font-family: 'Libre Barcode 128 Text', cursive;

    @media only screen and (max-width: 1200px){
      font-size: 100px;
    }
  }

 

    p{
      font-size: 24px;
      text-align: center;
      opacity: 0.7;
      border-radius: 15px;
      letter-spacing: 1.1px;
      line-height: 2.1rem;
      font-family: 'Satisfy', cursive;
      margin: 20px 0;

      @media only screen and (max-width: 1200px){
        font-size: 20px;
       
      }
    }

    h3{
      color: white;
      text-align: center;
      font-size: 28px;
    }
    span{
      font-size: 150px;
      transform: rotate(20deg);
      color: #6C63FF;
    }
`


const Logo = styled.div`
  width: 100px;
  position: fixed;
  top: 0;
  left: 10px;
  z-index: 1;

  @media only screen and (max-width: 1200px){
    width: 80px;
  }

  img{
    width: 100%;
  }

`
const AnimeContainer = styled.div`
  

`



export default Home