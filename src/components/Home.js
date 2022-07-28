import React, { useState } from 'react'
import styled from 'styled-components'



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

        <Logo>
              <img src='/images/logo.png' />
            </Logo>

            

 
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

  img{
    width: 95%;
  }
`

const Text = styled.div`
  width: 90%;
  padding: 50px 0;


  h1{
    font-size: 120px;
    text-align: center;
    font-family: 'Righteous', cursive;
  }

 

    p{
      font-size: 24px;
      text-align: center;
      opacity: 0.7;
      border-radius: 15px;
      letter-spacing: 1.1px;
      line-height: 2.1rem;
      font-family: 'Satisfy', cursive;
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

  img{
    width: 100%;
  }

`
const AnimeContainer = styled.div`
  

`



export default Home