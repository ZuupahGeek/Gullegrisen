import React from 'react';
import './Header.css';
import header_img from '../../Assets/header.png'

const Header = () => {
  return (
    <div className='header-component'>
      <div className='header'>
        <img src={header_img} alt="Affischen för KRIS-turnén"/>
      </div>
      <h2>Med på hela turnén som konferencier & uppvärmare är <span>Lisa Dahlin!</span></h2>
      <h3>Vilka år: covid, krig, inflation, Qatar-vm, portvinstå, bältros, rövböld, näringsbrist, ett stort jävla drev men kanske framförallt att vara tvungen att ”bli vuxen”. KRIS är en föreställning där Jonte Tengwall och Marcus Thapper gör pissrolig standup istället för att ta tag i skiten. Efter fem hyllade provföreställningar åker dom nu ut med varsin tajt timme på Sverigeturné.</h3>
     
    </div>
  )
}

export default Header