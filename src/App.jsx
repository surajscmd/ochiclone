import './App.css'
import Fullpage from './elements/Fullpage'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Fullpage />
    </>
  )
}

export default App
