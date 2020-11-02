import './App.css';
import {TweenMax, Power3} from 'gsap'
import { useEffect, useRef } from 'react';


function App() {
  let circle= useRef(null);
  let circleRed= useRef(null);
  let circleBlue= useRef(null);
  useEffect(()=>{
    TweenMax.from(circle, 0.8, {opacity:0, x:40, ease: Power3.easeOut})
    TweenMax.from(circleBlue, 0.8, {opacity:0, x:40, ease: Power3.easeOut, delay:.4})
    TweenMax.from(circleRed, 0.8, {opacity:0, x:40, ease: Power3.easeOut, delay: .2})

  },[])

  return (

    <div className="App">
      <header className="App-header">
        <div className='circle-container'>
          <div 
          ref={el=>{
            circle=el;
          }}
          className='circle'>

          </div>
          <div 
          ref={el=>{
            circleRed=el;
          }}
          className='circle red'>

          </div>
          <div 
          ref={el=>{
            circleBlue=el;
          }}
          className='circle blue'>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
