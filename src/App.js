import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Theme';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';



import ScrollTriggerProxy from './components/scrollTriggerProxy';

function App() {

  const containerRef = useRef(null)
  return (
    <>
      

       
    </>
  );
}

export default App;