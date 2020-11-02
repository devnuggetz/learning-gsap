import './App.css';
import {TweenMax, Power3} from 'gsap'
import { useEffect, useRef, useState } from 'react';


function App() {
  const [state, setState]= useState(false)
  let app = useRef(null)
  let circle= useRef(null);
  let circleRed= useRef(null);
  let circleBlue= useRef(null);
  useEffect(()=>{
     TweenMax.to(app,0,{css: {visibility: 'visible'}})
    TweenMax.from(circle, 0.8, {opacity:0, x:40, ease: Power3.easeOut})
    TweenMax.from(circleBlue, 0.8, {opacity:0, x:40, ease: Power3.easeOut, delay:.4})
    TweenMax.from(circleRed, 0.8, {opacity:0, x:40, ease: Power3.easeOut, delay: .2})
  },[])

  const handleExpand=()=>{
    TweenMax.to(circle, .8, {width: 200, height: 200, ease: Power3.easeOut});
    setState(true);
  }
  const handleShirnk=()=>{
    TweenMax.to(circle, .8, {width: 75, height: 75, ease: Power3.easeOut});
    setState(false);
  }

  return (

    <div 
    ref={el=>{
      app=el
    }}
    className="App">
      <header className="App-header">
        <div className='circle-container'>
          <div 
          onClick={state?handleShirnk:handleExpand}
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
