import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <img src="Logo.png" alt="" />
      <div className='header_contactDetails'>
        <text className='header_saveseat'>Save My Seat for Free Webinar</text>
        <h3>+ 91-92929281</h3>
      </div>

    </div>
  )
}

export default Header;