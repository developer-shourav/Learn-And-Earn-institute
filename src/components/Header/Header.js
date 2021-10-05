import React from 'react';
import "./Header.css" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

/* ----------FonAWesome Icon ------------ */
const element = <FontAwesomeIcon icon={faUserGraduate} /> 


const Header = () => {
    const activeStyle = {
            fontWeight: "bold",
            color: "f7f7f7",
            borderBottom: "2px solid #F39204"
    }

  
    return (
        <div className='d-flex nav-bar align-items-center   mt-2 py-2 px-2 '>
            <div className="ms-5 ps-5 w-50">
                <span className='fs-1 logo'>{element} </span> <span className='fs-3 fw-bold ' > Learn And Earn</span>
           </div>

            <nav className="w-50 ms-5 ps-5 ">
                {/* ------Route paths------- */}
                <NavLink className="nav-item" activeStyle={activeStyle} to ="/home">Home</NavLink>
                <NavLink className="nav-item" activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink className="nav-item" activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink className="nav-item" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                
           </nav>
        </div>
    );
};

export default Header;