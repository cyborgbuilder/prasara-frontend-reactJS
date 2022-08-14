import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Container>
        <ContentOne>
        <Contact>
            <h1>Contact Us</h1>
            <h2> 0314927863 / 0314927864 </h2>
        </Contact>
        <Develop>
            <img src='/images/logo.png' />
        </Develop>
        </ContentOne>
        <ContentTwo>
            <h1>Developed By: CyborgBuilder</h1>
            <a href='https://www.instagram.com/cyborgbuilder/'><BsInstagram style={{fontSize: "26px", marginTop: "5px", cursor: "pointer"}}/></a>
        </ContentTwo>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: #f1f1f1;
   
    padding: 10px;
    

`

const ContentOne = styled.div`
    min-height: 80px;
    padding: 10px;
    border-top: 4px solid #6C63FF;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1200px){

    }


`

const ContentTwo = styled(ContentOne)`
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 24px;
        font-family: 'Libre Barcode 128 Text', cursive;
    }

    a{
        text-decoration: none;
        color: black;
    }
`
const Contact = styled.div`
    h1{
        font-size: 22px;
        color: ;

        @media only screen and (max-width: 1200px){
            font-size: 18px;
        }
    }

    h2{
        font-size: 22px;
        color: ;

        @media only screen and (max-width: 1200px){
            font-size: 18px;
        }
    }

`

const Develop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img{
        width: 35%;
    }

`
export default Footer