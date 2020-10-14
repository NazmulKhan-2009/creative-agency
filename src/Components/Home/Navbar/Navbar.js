import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light col-md-10 mx-auto ">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="" width="150" height="47"/>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/ourPortfolio">Ourportfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/ourTeam">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{width:"100px"}} className="nav-link mr-5 text-white btn btn-dark" to="/login">Login</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;