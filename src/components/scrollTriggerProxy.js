
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollTriggerProxy = () => {

    const { scroll } = useLocomotiveScroll();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
       
        return () => {
            ScrollTrigger.addEventListener('refresh',() => scroll?.update() )
            ScrollTrigger.refresh();

        }
    }, [scroll]);





    return null;
}

export default ScrollTriggerProxy