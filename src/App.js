import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Theme';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';


import Home from './section/Home';
import About from './section/About';
import Shop from './section/Shop';
import Banner from './section/Banner';
import Footer from './section/Footer';
import NewArrival from "./section/NewArivals";


import ScrollTriggerProxy from './components/scrollTriggerProxy';

function App() {

  const containerRef = useRef(null)
  return (
    <>
       <GlobalStyles />
      <ThemeProvider theme={dark} >

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
            }
          }
          watch={
            [
              ///
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <main className='App' data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>

       
    </>
  );
}

export default App;