import React from 'react';
import styled from 'styled-components';



import img1 from '../assets/Images/img1.jpeg';
import lazyboy36 from '../assets/Images/lazyboy36.png';
import lazyboy38 from '../assets/Images/lazyboy38.png';

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display: flex;
margin: 0 auto;
@media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`
//delete overflow incase of bug 

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Panchang', sans-serif;
font-wight: 300;
position: absolute;
top: 1rem;
left: 6%;
z-index:5;
@media (max-width: 64em) {
    font-size: ${(props) => `clac(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: realtive;
z-index: 5;
margin-top: 20%;
@media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`

const Right = styled.div`
width: 50%;
position: relative;
img {
    width: 100%;
    height: auto;
}
.small-img-1 {
    width:40%;
    position: absolute;
    right: 95%;
    bottom: 10%
}
.small-img-2 {
    width:40%;
    position: absolute;
    right: 8%;
    bottom: 30%;
}
@media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      height: 100vh;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`

const About = () => {
    return (
        <Section id="fixed-target">
            <Title data-scroll datta-scroll-speed="-2" data-scroll-direction="horizontal" id='about'>
                We are
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
            A fashion studio based in califonia. 
We create unique designs that will blow your mind. We also design unique tote bag. 
Art defines space, Music defines time and Lazy universe is defined by both
<br />
<br />
We are very dedicated to making our products. 
We offer unique and creative products to a wide range of people. 
We have a variety of styles, but for most people, all of the options are in the box. 
We specialize in making things that make you happy.
<br />
<br />
We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
We are always looking to make something that is easy for everyone.
            </Left>
            <Right>
                <img src={img1} alt='Lazy model' />
                <img
                data-scroll data-scroll-speed='5'
                src={lazyboy36} className='small-img-1' alt='Lazy model' />
                <img 
                data-scroll data-scroll-speed='-2'
                src={lazyboy38} className='small-img-2' alt='Lazy model' />
            </Right>
        </Section>
    )
}
export default About