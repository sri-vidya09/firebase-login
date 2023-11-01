import React from 'react'
import { SiCodechef } from "react-icons/si";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { BsFillCartFill } from "react-icons/bs";
import {BiSolidHomeSmile  } from "react-icons/bi";
import {FiLogOut  } from "react-icons/fi";
import {Link} from "react-router-dom"
import Popup from 'reactjs-popup'
import "./index.css"


function Header() {
  return (
    <div className='bgh-container'>
        <div className='heading-container'>
            <SiCodechef className='icon-header-chef'/>
            <h1 className='heading-uni-header'>UNI Restro Cafe</h1>
        </div>
        <div className='nav-container'>
             <ul className='nav-list'>
              <li className='list-name'><Link to="/home" className="nav-link">Home</Link></li>
          
            <li className='list-name'><Link to="/cart" className="nav-link">Cart</Link></li>
        </ul>
        <button className='logout-btn' type='button'>Logout</button>
        </div>
        <Popup
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={25} className="hamburger" />
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <div className="nav-link-container">
                <Link to="/" className="nav-link">
                <BiSolidHomeSmile/>
                </Link>
                <Link to="/cart" className="nav-link">
                 <BsFillCartFill/>
                </Link>
                <button
                  type="button"
                  className="list-logout-btn"
                >
                  <FiLogOut/>
                </button>
              </div>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
    </div>
   
  )
}

export default Header