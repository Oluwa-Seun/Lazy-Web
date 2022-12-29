import React from 'react';
import styled from 'styled-components';



const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;
video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 48em) {
        object-position: center 10%;
      }
      @media (max-width: 40em) {
        object-position: center 50%;
      }
}
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left:0;
right:0; 
z-index:1;
background-color: ${props => `rgba(${props.theme.bodyRgba},0.7)`};
`

const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left:0;
right:0; 
z-index: 5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};
div {
    display:flex;
    flex-direction: row;
}
h1 {
    font-family: 'Panchang', sans-serif;
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    @media (max-width: 30em) {
        font-size: 60px;
    }
}
h2 {
    font-family: 'panchang', sans-serif;
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    @media (max-width: 30em) {
        font-size: ${(props) => props.theme.fontmd};
        margin-top: -0.5rem;
    }
}
`
const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div className='test'>
                    <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>L</h1>
                    <h1 data-scroll data-scroll-delay='0.08' data-scroll-speed='4'>a</h1>
                    <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4'>z</h1>
                    <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4'>y.</h1>
                    <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>u</h1>
                    <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4'>n</h1>
                    <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>i</h1>
                    <h1 data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>v</h1>
                    <h1 data-scroll data-scroll-delay='0.07' data-scroll-speed='4'>e</h1>
                    <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4'>r</h1>
                    <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>s</h1>
                    <h1 data-scroll data-scroll-delay='0.07' data-scroll-speed='4'>e</h1>
                    
                </div>
                <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='2'>Inspire. Create .Belive</h2>
            </Title>
            
        </VideoContainer>
    )
}

export default CoverVideo