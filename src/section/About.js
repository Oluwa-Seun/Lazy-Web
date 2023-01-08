import React from 'react';
import styled from 'styled-components';

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