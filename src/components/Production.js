import React from 'react'
import styled from 'styled-components'


function Production() {
  return (
    <Container>
      
        <Wrap>

        <Header>
            <h1>Products</h1>
        </Header>
           <Content>
           <Box>
              <Text>
                <h1>ATG GLOVES WASHING</h1>
              </Text>
            </Box>

            <BoxTwo>
              <Text>
                <h1>FABRIC WASHING</h1>
              </Text>
            </BoxTwo>

            <BoxThree>
              <Text>
                <h1>GARMENTS WASHING </h1>
              </Text>
            </BoxThree>
           </Content>
        </Wrap>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f1f1; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Wrap = styled.div`
    width: 95%;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/home2.jpg');
    background-size: cover;
    border-radius: 15px;
    
    

`

const Content = styled.div`
display: flex;
flex-wrap: wrap;
padding: 30px 0;

@media only screen and (max-width: 1200px){
  flex-direction: column;
}



`
const Header = styled.div`
    text-align: center;
    margin: 40px 0;

    
    @media only screen and (max-width: 1200px){
        padding-bottom: 20px;
    }


    h1{
        font-size: 100px;
        
        color: #fff;

        
    @media only screen and (max-width: 1200px){
        font-size: 42px;
    }
    }

`

const Box = styled.div`
    width: 30%;
    height: 300px;
    margin: 24.5px;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/gloves.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    opacity: 0.9;

    @media only screen and (max-width: 1200px){
      width: 90%;
      height: 200px;
  }

    border-radius: 15px;
    padding: 15px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
  
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    &:hover{
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

`

const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;

  h1{
    color: #fff;
    text-align: center;

    @media only screen and (max-width: 1200px){
     font-size: 22px; 
    }
  }

`

const BoxTwo = styled.div`
width: 30%;
height: 300px;
margin: 20px;
background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://qph.fs.quoracdn.net/main-qimg-41967f02e25e44d3b79e773794f853c8-lq');
background-size: cover;
background-repeat: no-repeat;
position: relative;
opacity: 0.8;
border-radius: 15px;
padding: 15px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;

transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor: pointer;

@media only screen and (max-width: 1200px){
 width: 90%; 
 height: 200px;    
}

&:hover{
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}

`

const BoxThree = styled.div`
width: 30%;
height: 300px;
margin: 20px;
background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FybWVudHxlbnwwfHwwfHw%3D&w=1000&q=80');
background-size: cover;
background-repeat: no-repeat;
position: relative;
opacity: 0.8;
border-radius: 15px;
padding: 15px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;

transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor: pointer;

@media only screen and (max-width: 1200px){
 width: 90%;
 height: 200px;     
}

&:hover{
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`
export default Production