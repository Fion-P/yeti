import React from "react";
import './nav-bar.css';

class NavBar extends React.Component {
  
  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-bar-left'>
          <img className='logo-black' src="logo-black.svg" />
        </div>

        <div className='nav-bar-right'>
          <div className='menu'>
            MENU
          </div>
          <img className='hamburger-menu' src='hamburger-menu.svg'/>
        </div>
      </div>
    )
  }

}

export default NavBar;