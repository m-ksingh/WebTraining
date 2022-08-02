import React, { useState } from 'react'
import "./Scrollindicator.css"

const Scrollindicator = () => {

  const [scroll, setScroll] = useState(0);
  
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight = document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };
  window.addEventListener("scroll", onScroll)
  return (
    <div className='container'>
      <div className='indicator' style={{ width: `${scroll}%` }}>

      </div>
    </div>
  )
}

export default Scrollindicator