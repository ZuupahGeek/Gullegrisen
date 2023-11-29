import React from 'react';
import './Header.css';
import header_img from '../../Assets/gullegrisen_header.jpg'

const Header = () => {
  return (
    <div className='header-component'>
      <div className='header'>
        <img src={header_img} alt="Affischen för KRIS-turnén"/>
      </div>
      
      <h3>Gullegrisen är en förtjusande standupföreställning av och med Clara Clara Kristiansen. Med ett glas vin i handen och en glimt i ögat levererar hon en timmes hejdundrande komedi. Det blir högt och lågt och alldeles, alldeles underbart. Clara är rapp i käften och grov i munnen men framför allt är hon fullkomligt bedårande.</h3>
      <h3>Clara Clara Kristiansen har hörts i Tankesmedjan i P3 och Guldörat-nominerade podden Jag är Kinky. Hon har uppträtt på flera av landets mest prestigefyllda scener och är just nu aktuell i SVTs Rostmacka. Gullegrisen är hennes allra första soloföreställning. Missa inte chansen att se en riktig sötnöt live in action.</h3>
     
    </div>
  )
}

export default Header