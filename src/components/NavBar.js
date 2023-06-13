import React, { useState, useEffect } from 'react';import face from '../assets/headshot.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"


function NavBar() {
  
  const [openTab, toggleTab] = useState(false)

  const toggleNavBarTab = () =>{
    toggleTab(!openTab)
  }

  useEffect(() => {
    // Update openTab state based on window width
    const handleResize = () => {
      toggleTab(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>

      <div className="leftSide" id={openTab? "open" : "close"}>

        <img src={face}/>

        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">menue</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        </div>

      </div>
      
      <div className="rightSide">

        <Link to="/">Home</Link>
        <Link to="/menu">menue</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>

        <button onClick={toggleNavBarTab}>
        <ReorderIcon/>
        </button>

      </div>
    </div>
  )
}

export default NavBar