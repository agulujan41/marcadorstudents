import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import "./js/navbar.js"
const Navbar = () => {
 
  return (
    <div className="navbar" id="navbar" >
      <div className='presentationNavbar'></div>
      <div className="optionsNavbar">
        <nav>
          <ul>
            <li>
              <a href="/#inicioSection">Inicio</a>
            </li>
            <li>
              <a href="/#posicionesSection">Posiciones</a>
            </li>
          </ul>
        </nav>
      </div>
      <MenuIcon id="menu_icon_button" className='menu_icon_button'/>
    </div>
  );
};

export default Navbar;
